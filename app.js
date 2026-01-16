require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");
const session = require("express-session");
const bcrypt = require("bcrypt");
const flash = require("connect-flash");

/* =======================
   MODELS
======================= */
const University = require("./models/university");
const Course = require("./models/course");
const Paper = require("./models/paper");
const User = require("./models/user");

/* =======================
   SUBJECT DATA
======================= */
const subjectData = require("./init/subjectdata");

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 8080;
/* =======================
   DATABASE
======================= */
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

/* =======================
   VIEW + MIDDLEWARE
======================= */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("uploads"));

/* =======================
   SESSION + FLASH
======================= */
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

app.use(flash());

/* =======================
   GLOBAL VARIABLES FOR EJS
======================= */
app.use((req, res, next) => {
  res.locals.currentUser = req.session.userId || null;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

/* =======================
   LOGIN CHECK MIDDLEWARE
======================= */
function isLoggedIn(req, res, next) {
  if (req.session.userId) return next();

  // remember page user wanted
  req.session.redirectTo = req.originalUrl;
  req.flash("error", "Please login first");
  res.redirect("/login");
}

/* =======================
   MULTER (PDF UPLOAD)
======================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname)
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "application/pdf") cb(null, true);
    else cb(new Error("Only PDF files allowed"));
  }
});

/* =======================
   AUTH ROUTES
======================= */

// LOGIN PAGE
app.get("/login", (req, res) => {
  res.render("auth/login");
});

// REGISTER PAGE
app.get("/register", (req, res) => {
  res.render("auth/register");
});

// REGISTER USER
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  // 1️⃣ Check if user already exists
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    req.flash("error", "User already exists. Please login.");
    return res.redirect("/login");
  }

  // 2️⃣ Hash password
  const hash = await bcrypt.hash(password, 10);

  // 3️⃣ Create new user
  await User.create({
    name,
    email,
    password: hash
  });

  // 4️⃣ Redirect to login after successful registration
  req.flash("success", "Registration successful. Please login.");
  res.redirect("/login");
});

// LOGIN USER
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    req.flash("error", "Invalid email or password");
    return res.redirect("/login");
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    req.flash("error", "Invalid email or password");
    return res.redirect("/login");
  }

  req.session.userId = user._id;

  // redirect to original page
  const redirectUrl = req.session.redirectTo || "/university";
  delete req.session.redirectTo;

  res.redirect(redirectUrl);
});

// LOGOUT
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/university");
  });
});

/* =======================
   UNIVERSITY ROUTES (PUBLIC)
======================= */

app.get("/university", async (req, res) => {
  const search = req.query.search || "";

  const query = search
    ? { name: { $regex: search, $options: "i" } }
    : {};

  const alluniversities = await University.find(query);

  res.render("university/index", {
    alluniversities,
    search
  });
});


app.get("/university/:id", async (req, res) => {
  const uni = await University.findById(req.params.id);
  const courses = await Course.find({ university: req.params.id });

  if (!uni) return res.status(404).send("University not found");

  res.render("university/show", { uni, courses });
});

app.get("/university/:uid/course/:cid", async (req, res) => {
  const uni = await University.findById(req.params.uid);
  const course = await Course.findById(req.params.cid);

  if (!uni || !course) return res.status(404).send("Not found");

  res.render("course/form", { uni, course, subjectData });
});

/* =======================
   PAPER ROUTES (LOGIN REQUIRED)
======================= */

// VIEW PAPERS
app.get("/papers", isLoggedIn, async (req, res) => {
  const papers = await Paper.find(req.query).sort({ createdAt: -1 });
  res.render("papers/index", { papers });
});

// UPLOAD PAGE
app.get("/papers/upload", isLoggedIn, (req, res) => {
  res.render("papers/upload", {
    query: req.query,
    subjectData
  });
});

// SAVE PAPER
app.post(
  "/papers",
  isLoggedIn,
  upload.single("paperFile"),
  async (req, res) => {

    await Paper.create({
      title: req.body.title,
      university: req.body.university,
      course: req.body.course,
      branch: req.body.branch,
      year: req.body.year,
      semester: req.body.semester,
      subject: req.body.subject,
      filePath: req.file.path
    });

    //  Flash message
    req.flash("success", "Paper uploaded successfully");

    //  Redirect to AVAILABLE PAPERS (same filters)
    res.redirect(
      `/papers?university=${req.body.university}` +
      `&course=${req.body.course}` +
      `&branch=${req.body.branch}` +
      `&year=${req.body.year}` +
      `&semester=${req.body.semester}` +
      `&subject=${req.body.subject}`
    );
  }
);


/* =======================
   SERVER
======================= */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




