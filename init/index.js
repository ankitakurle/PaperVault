require("dotenv").config();
const mongoose = require("mongoose");
const initdata = require("./data.js");
const courseData = require("./coursedata.js");

const University = require("../models/university.js");
const Course = require("../models/course.js");

const MONGO_URL = process.env.MONGO_URL;

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to DB");
}

main().catch(err => console.log(err));

const initDB = async () => {

    // 1️⃣ Reset universities
    await University.deleteMany({});
    const universities = await University.insertMany(initdata.data);
    console.log("Universities initialized");

    // 2️⃣ Reset courses
    await Course.deleteMany({});

    for (let entry of courseData) {
        const uni = await University.findOne({ name: entry.universityName });

        if (!uni) continue;

        for (let courseName of entry.courses) {
            await Course.create({
                name: courseName,
                university: uni._id
            });
        }
    }

    console.log("Courses initialized");
};

initDB();
