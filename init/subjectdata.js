module.exports = {

  /* =====================================================
     RGPV : BTECH (4 YEARS | 8 SEMESTERS)
     BRANCHES LISTED FIRST
  ===================================================== */

  BTech: {

    /* ---------- COMMON FIRST YEAR (ALL BRANCHES) ---------- */
    __COMMON__: {
      "1st": {
        "1": [
          "Engineering Mathematics I",
          "Engineering Physics",
          "Programming in C",
          "Basic Electrical Engineering",
          "Engineering Graphics"
        ],
        "2": [
          "Engineering Mathematics II",
          "Engineering Chemistry",
          "Data Structures",
          "Environmental Studies",
          "Digital Logic Design"
        ]
      }
    },

    /* ---------- CSE ---------- */
    CSE: cseBranch(),

    /* ---------- CSIT ---------- */
    CSIT: cseBranch(),

    /* ---------- IT ---------- */
    IT: cseBranch(),

    /* ---------- AI & DS ---------- */
    AIDS: {
      ...cseBranch(),
      "3rd": {
        "5": [
          "Machine Learning",
          "Probability & Statistics",
          "Data Mining",
          "Python for Data Science",
          "Elective I"
        ],
        "6": [
          "Deep Learning",
          "Big Data Analytics",
          "Computer Vision",
          "Natural Language Processing",
          "Elective II"
        ]
      }
    },

    /* ---------- ECE ---------- */
    ECE: electronicsBranch(),

    /* ---------- EC ---------- */
    EC: electronicsBranch(),

    /* ---------- EE ---------- */
    EE: {
      "2nd": {
        "3": [
          "Electrical Machines I",
          "Network Theory",
          "Signals and Systems",
          "Control Systems",
          "Electrical Measurements"
        ],
        "4": [
          "Electrical Machines II",
          "Power Electronics",
          "Digital Electronics",
          "Microprocessors",
          "Elective I"
        ]
      },
      "3rd": {
        "5": [
          "Power Systems I",
          "Renewable Energy Systems",
          "Industrial Drives",
          "Elective II"
        ],
        "6": [
          "Power Systems II",
          "Smart Grid",
          "High Voltage Engineering",
          "Elective III"
        ]
      },
      "4th": {
        "7": ["Internship / Seminar"],
        "8": ["Major Project"]
      }
    },

    /* ---------- ME ---------- */
    ME: {
      "2nd": {
        "3": [
          "Engineering Thermodynamics",
          "Strength of Materials",
          "Manufacturing Processes",
          "Fluid Mechanics",
          "Material Science"
        ],
        "4": [
          "Theory of Machines",
          "Thermal Engineering",
          "Machine Design I",
          "Metrology",
          "Elective I"
        ]
      },
      "3rd": {
        "5": [
          "Heat Transfer",
          "CAD / CAM",
          "Industrial Engineering",
          "Elective II"
        ],
        "6": [
          "Dynamics of Machines",
          "Finite Element Analysis",
          "Machine Design II",
          "Elective III"
        ]
      },
      "4th": {
        "7": ["Industrial Training"],
        "8": ["Major Project"]
      }
    },

    /* ---------- CIVIL ---------- */
    CE: {
      "2nd": {
        "3": [
          "Strength of Materials",
          "Surveying",
          "Building Materials",
          "Engineering Geology",
          "Fluid Mechanics"
        ],
        "4": [
          "Structural Analysis",
          "Concrete Technology",
          "Transportation Engineering",
          "Environmental Engineering I",
          "Elective I"
        ]
      },
      "3rd": {
        "5": [
          "Design of Structures I",
          "Environmental Engineering II",
          "Geotechnical Engineering",
          "Elective II"
        ],
        "6": [
          "Design of Structures II",
          "Construction Planning",
          "Elective III"
        ]
      },
      "4th": {
        "7": ["Internship / Seminar"],
        "8": ["Major Project"]
      }
    }
  },

  /* =====================================================
     RGPV : MTECH (2 YEARS | 4 SEMESTERS)
  ===================================================== */

  /* =====================================================
   RGPV : MTECH (2 YEARS | 4 SEMESTERS)
===================================================== */

MTech: {

  /* ================= CSE ================= */
  CSE: {
    "1st": {
      "1": [
        "Advanced Data Structures",
        "Advanced Algorithms",
        "Research Methodology",
        "Advanced Operating Systems",
        "Mathematical Foundations for CS"
      ],
      "2": [
        "Machine Learning",
        "Advanced Database Systems",
        "Distributed Systems",
        "Information Security",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Deep Learning",
        "Big Data Analytics",
        "Cloud Computing",
        "Elective II"
      ],
      "4": [
        "Dissertation / Thesis"
      ]
    }
  },

  /* ================= AI & DS ================= */
  AIDS: {
    "1st": {
      "1": [
        "Advanced Python Programming",
        "Probability & Statistics",
        "Linear Algebra",
        "Research Methodology",
        "Data Structures for AI"
      ],
      "2": [
        "Machine Learning",
        "Data Mining",
        "Deep Learning",
        "Big Data Frameworks",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
        "Elective II"
      ],
      "4": [
        "Dissertation / Thesis"
      ]
    }
  },

  /* ================= IoT ================= */
  IoT: {
    "1st": {
      "1": [
        "Advanced Embedded Systems",
        "Internet of Things Architecture",
        "Wireless Sensor Networks",
        "Research Methodology",
        "Advanced Microcontrollers"
      ],
      "2": [
        "IoT Protocols",
        "Cloud Computing for IoT",
        "Industrial IoT",
        "IoT Security",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Edge Computing",
        "Smart Systems Design",
        "Elective II"
      ],
      "4": [
        "Dissertation / Thesis"
      ]
    }
  },

  /* ================= SOFTWARE ENGINEERING ================= */
  SE: {
    "1st": {
      "1": [
        "Advanced Software Engineering",
        "Software Architecture",
        "Formal Methods",
        "Research Methodology",
        "Advanced DBMS"
      ],
      "2": [
        "Agile Methodologies",
        "Software Project Management",
        "Software Testing",
        "DevOps",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Cloud Native Applications",
        "Microservices Architecture",
        "Elective II"
      ],
      "4": [
        "Dissertation / Thesis"
      ]
    }
  },

  /* ================= CYBER SECURITY ================= */
  CyberSecurity: {
    "1st": {
      "1": [
        "Cryptography",
        "Network Security",
        "Secure Operating Systems",
        "Research Methodology",
        "Applied Mathematics"
      ],
      "2": [
        "Web Security",
        "Malware Analysis",
        "Ethical Hacking",
        "Digital Forensics",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Advanced Cyber Laws",
        "Cloud Security",
        "Elective II"
      ],
      "4": [
        "Dissertation / Thesis"
      ]
    }
  }
},
MBA: {

  /* ================= FINANCE ================= */
  Finance: {
    "1st": {
      "1": [
        "Principles of Management",
        "Managerial Economics",
        "Financial Accounting",
        "Business Statistics",
        "Business Communication"
      ],
      "2": [
        "Corporate Finance",
        "Cost & Management Accounting",
        "Financial Markets & Institutions",
        "Research Methodology",
        "Legal Aspects of Business"
      ]
    },

    "2nd": {
      "3": [
        "Investment Analysis & Portfolio Management",
        "International Finance",
        "Financial Derivatives",
        "Elective I",
        "Elective II"
      ],
      "4": [
        "Summer Internship Project",
        "Comprehensive Viva Voce"
      ]
    }
  },

  /* ================= MARKETING ================= */
  Marketing: {
    "1st": {
      "1": [
        "Principles of Management",
        "Managerial Economics",
        "Marketing Management",
        "Business Statistics",
        "Business Communication"
      ],
      "2": [
        "Consumer Behavior",
        "Marketing Research",
        "Sales & Distribution Management",
        "Research Methodology",
        "Legal Aspects of Business"
      ]
    },

    "2nd": {
      "3": [
        "Digital Marketing",
        "Brand Management",
        "International Marketing",
        "Elective I",
        "Elective II"
      ],
      "4": [
        "Summer Internship Project",
        "Comprehensive Viva Voce"
      ]
    }
  },

  /* ================= HUMAN RESOURCE ================= */
  HR: {
    "1st": {
      "1": [
        "Principles of Management",
        "Organizational Behavior",
        "Managerial Economics",
        "Business Statistics",
        "Business Communication"
      ],
      "2": [
        "Human Resource Management",
        "Industrial Relations",
        "Research Methodology",
        "Legal Aspects of Business",
        "Compensation Management"
      ]
    },

    "2nd": {
      "3": [
        "Training & Development",
        "Performance Management Systems",
        "Labor Laws",
        "Elective I",
        "Elective II"
      ],
      "4": [
        "Summer Internship Project",
        "Comprehensive Viva Voce"
      ]
    }
  },

  /* ================= OPERATIONS ================= */
  Operations: {
    "1st": {
      "1": [
        "Principles of Management",
        "Managerial Economics",
        "Business Statistics",
        "Operations Management",
        "Business Communication"
      ],
      "2": [
        "Production Planning & Control",
        "Supply Chain Management",
        "Research Methodology",
        "Legal Aspects of Business",
        "Quality Management"
      ]
    },

    "2nd": {
      "3": [
        "Project Management",
        "Operations Strategy",
        "Logistics Management",
        "Elective I",
        "Elective II"
      ],
      "4": [
        "Summer Internship Project",
        "Comprehensive Viva Voce"
      ]
    }
  },

  /* ================= BUSINESS ANALYTICS ================= */
  BusinessAnalytics: {
    "1st": {
      "1": [
        "Principles of Management",
        "Managerial Economics",
        "Business Statistics",
        "Introduction to Analytics",
        "Business Communication"
      ],
      "2": [
        "Data Analysis using Excel",
        "Business Intelligence",
        "Research Methodology",
        "Legal Aspects of Business",
        "Database Management"
      ]
    },

    "2nd": {
      "3": [
        "Predictive Analytics",
        "Data Visualization",
        "Machine Learning for Business",
        "Elective I",
        "Elective II"
      ],
      "4": [
        "Analytics Project",
        "Comprehensive Viva Voce"
      ]
    }
  },

  /* ================= GENERAL MBA ================= */
  General: {
    "1st": {
      "1": [
        "Principles of Management",
        "Managerial Economics",
        "Business Statistics",
        "Financial Accounting",
        "Business Communication"
      ],
      "2": [
        "Marketing Management",
        "Human Resource Management",
        "Corporate Finance",
        "Research Methodology",
        "Legal Aspects of Business"
      ]
    },

    "2nd": {
      "3": [
        "Strategic Management",
        "Entrepreneurship Development",
        "International Business",
        "Elective I",
        "Elective II"
      ],
      "4": [
        "Summer Internship Project",
        "Comprehensive Viva Voce"
      ]
    }
  }
},
MCA: {

  /* ================= CORE MCA ================= */
  Core: {
    "1st": {
      "1": [
        "Programming in C",
        "Computer Fundamentals",
        "Discrete Mathematics",
        "Operating Systems",
        "Business Communication"
      ],
      "2": [
        "Data Structures",
        "Database Management Systems",
        "Object Oriented Programming with Java",
        "Computer Networks",
        "Software Engineering"
      ]
    },

    "2nd": {
      "3": [
        "Web Technologies",
        "Python Programming",
        "Artificial Intelligence",
        "Mobile Application Development",
        "Elective I"
      ],
      "4": [
        "Major Project",
        "Seminar & Viva Voce"
      ]
    }
  },

  /* ================= DATA SCIENCE ================= */
  DataScience: {
    "1st": {
      "1": [
        "Programming in Python",
        "Mathematics for Data Science",
        "Computer Fundamentals",
        "Statistics",
        "Communication Skills"
      ],
      "2": [
        "Data Structures",
        "Database Management Systems",
        "Data Mining",
        "Machine Learning",
        "Software Engineering"
      ]
    },

    "2nd": {
      "3": [
        "Big Data Analytics",
        "Data Visualization",
        "Deep Learning",
        "Elective I",
        "Elective II"
      ],
      "4": [
        "Data Science Project",
        "Seminar & Viva Voce"
      ]
    }
  },

  /* ================= ARTIFICIAL INTELLIGENCE ================= */
  ArtificialIntelligence: {
    "1st": {
      "1": [
        "Python Programming",
        "Linear Algebra",
        "Discrete Mathematics",
        "Artificial Intelligence Fundamentals",
        "Communication Skills"
      ],
      "2": [
        "Data Structures",
        "Machine Learning",
        "Knowledge Representation",
        "Neural Networks",
        "Software Engineering"
      ]
    },

    "2nd": {
      "3": [
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Elective I",
        "Elective II"
      ],
      "4": [
        "AI Project",
        "Seminar & Viva Voce"
      ]
    }
  },

  /* ================= CYBER SECURITY ================= */
  CyberSecurity: {
    "1st": {
      "1": [
        "Programming in C",
        "Computer Fundamentals",
        "Discrete Mathematics",
        "Introduction to Cyber Security",
        "Communication Skills"
      ],
      "2": [
        "Data Structures",
        "Network Security",
        "Cryptography",
        "Operating Systems Security",
        "Software Engineering"
      ]
    },

    "2nd": {
      "3": [
        "Ethical Hacking",
        "Digital Forensics",
        "Web Application Security",
        "Elective I",
        "Elective II"
      ],
      "4": [
        "Cyber Security Project",
        "Seminar & Viva Voce"
      ]
    }
  }

},
BPharma: {

  /* ===================== PHARMACY ===================== */
  Pharmacy: {

    /* ---------- 1st YEAR ---------- */
    "1st": {
      "1": [
        "Human Anatomy & Physiology I",
        "Pharmaceutical Analysis I",
        "Pharmaceutics I",
        "Pharmaceutical Inorganic Chemistry",
        "Communication Skills"
      ],
      "2": [
        "Human Anatomy & Physiology II",
        "Pharmaceutical Analysis II",
        "Pharmaceutics II",
        "Organic Chemistry I",
        "Environmental Sciences"
      ]
    },

    /* ---------- 2nd YEAR ---------- */
    "2nd": {
      "3": [
        "Organic Chemistry II",
        "Physical Pharmaceutics I",
        "Pharmacology I",
        "Pharmacognosy I",
        "Pathophysiology"
      ],
      "4": [
        "Organic Chemistry III",
        "Physical Pharmaceutics II",
        "Pharmacology II",
        "Pharmacognosy II",
        "Community Pharmacy"
      ]
    },

    /* ---------- 3rd YEAR ---------- */
    "3rd": {
      "5": [
        "Medicinal Chemistry I",
        "Industrial Pharmacy I",
        "Pharmaceutical Microbiology",
        "Biopharmaceutics",
        "Elective I"
      ],
      "6": [
        "Medicinal Chemistry II",
        "Industrial Pharmacy II",
        "Pharmaceutical Biotechnology",
        "Quality Assurance",
        "Elective II"
      ]
    },

    /* ---------- 4th YEAR ---------- */
    "4th": {
      "7": [
        "Pharmaceutical Jurisprudence",
        "Novel Drug Delivery Systems",
        "Pharmacovigilance",
        "Elective III",
        "Elective IV"
      ],
      "8": [
        "Project Work",
        "Industrial Training / Internship"
      ]
    }
  }
},
MPharma: {

  /* ================= PHARMACEUTICS ================= */
  Pharmaceutics: {

    "1st": {
      "1": [
        "Advanced Pharmaceutics I",
        "Modern Pharmaceutical Analytical Techniques",
        "Drug Delivery Systems",
        "Research Methodology & Biostatistics",
        "Pharmaceutical Regulatory Affairs"
      ],
      "2": [
        "Advanced Pharmaceutics II",
        "Novel Drug Delivery Systems",
        "Biopharmaceutics & Pharmacokinetics",
        "Quality Assurance",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Formulation Development",
        "Scale Up & Technology Transfer",
        "Stability Studies",
        "Elective II"
      ],
      "4": [
        "Dissertation / Thesis"
      ]
    }
  },

  /* ================= PHARMACOLOGY ================= */
  Pharmacology: {

    "1st": {
      "1": [
        "Advanced Pharmacology I",
        "Cellular & Molecular Pharmacology",
        "Experimental Pharmacology",
        "Research Methodology",
        "Biostatistics"
      ],
      "2": [
        "Advanced Pharmacology II",
        "Toxicology",
        "Clinical Research",
        "Drug Regulatory Affairs",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Pharmacovigilance",
        "Clinical Trials",
        "Advanced Toxicology",
        "Elective II"
      ],
      "4": [
        "Dissertation / Thesis"
      ]
    }
  },

  /* ================= PHARMACEUTICAL ANALYSIS ================= */
  PharmaceuticalAnalysis: {

    "1st": {
      "1": [
        "Advanced Pharmaceutical Analysis I",
        "Spectroscopic Techniques",
        "Analytical Method Validation",
        "Research Methodology",
        "Statistics & Quality Control"
      ],
      "2": [
        "Advanced Pharmaceutical Analysis II",
        "Chromatographic Techniques",
        "Bioanalytical Methods",
        "Quality Assurance",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Stability Testing",
        "Regulatory Guidelines",
        "Forced Degradation Studies",
        "Elective II"
      ],
      "4": [
        "Dissertation / Thesis"
      ]
    }
  },

  /* ================= PHARMACEUTICAL CHEMISTRY ================= */
  PharmaceuticalChemistry: {

    "1st": {
      "1": [
        "Advanced Organic Chemistry",
        "Drug Design & Discovery",
        "Spectral Analysis",
        "Research Methodology",
        "Medicinal Chemistry"
      ],
      "2": [
        "Advanced Medicinal Chemistry",
        "Structure Activity Relationship",
        "Computer Aided Drug Design",
        "Regulatory Affairs",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Advanced Synthetic Chemistry",
        "Process Chemistry",
        "Green Chemistry",
        "Elective II"
      ],
      "4": [
        "Dissertation / Thesis"
      ]
    }
  },

  /* ================= QUALITY ASSURANCE ================= */
  QualityAssurance: {

    "1st": {
      "1": [
        "Quality Management Systems",
        "Good Manufacturing Practices",
        "Pharmaceutical Validation",
        "Research Methodology",
        "Regulatory Affairs"
      ],
      "2": [
        "Quality Control & Assurance",
        "Audits & Inspections",
        "Stability Studies",
        "Documentation Practices",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "ICH Guidelines",
        "Process Validation",
        "Risk Management",
        "Elective II"
      ],
      "4": [
        "Dissertation / Thesis"
      ]
    }
  }
},
Polytechnic: {

  /* ================= COMMON FIRST YEAR ================= */
  __COMMON__: {

    "1st": {
      "1": [
        "Applied Mathematics I",
        "Applied Physics",
        "Applied Chemistry",
        "Engineering Drawing",
        "Communication Skills"
      ],
      "2": [
        "Applied Mathematics II",
        "Environmental Studies",
        "Workshop Practice",
        "Computer Fundamentals",
        "Engineering Materials"
      ]
    }
  },

  /* ================= CIVIL ENGINEERING ================= */
  Civil: {

    "2nd": {
      "3": [
        "Strength of Materials",
        "Surveying I",
        "Building Materials",
        "Engineering Geology",
        "Concrete Technology"
      ],
      "4": [
        "Structural Mechanics",
        "Surveying II",
        "Transportation Engineering",
        "Environmental Engineering",
        "Hydraulics"
      ]
    },

    "3rd": {
      "5": [
        "Design of Structures",
        "Construction Planning & Management",
        "Water Resources Engineering",
        "Estimation & Costing",
        "Elective"
      ],
      "6": [
        "Industrial Training",
        "Major Project",
        "Professional Practice"
      ]
    }
  },

  /* ================= MECHANICAL ENGINEERING ================= */
  Mechanical: {

    "2nd": {
      "3": [
        "Engineering Thermodynamics",
        "Strength of Materials",
        "Manufacturing Processes",
        "Fluid Mechanics",
        "Material Science"
      ],
      "4": [
        "Theory of Machines",
        "Thermal Engineering",
        "Machine Drawing",
        "Metrology",
        "Elective"
      ]
    },

    "3rd": {
      "5": [
        "Heat Transfer",
        "CAD / CAM",
        "Industrial Engineering",
        "Refrigeration & Air Conditioning",
        "Elective"
      ],
      "6": [
        "Industrial Training",
        "Major Project",
        "Entrepreneurship Development"
      ]
    }
  },

  /* ================= ELECTRICAL ENGINEERING ================= */
  Electrical: {

    "2nd": {
      "3": [
        "Electrical Machines I",
        "Network Theory",
        "Electrical Measurements",
        "Basic Electronics",
        "Control Systems"
      ],
      "4": [
        "Electrical Machines II",
        "Power Electronics",
        "Industrial Drives",
        "Microcontrollers",
        "Elective"
      ]
    },

    "3rd": {
      "5": [
        "Power Systems",
        "Renewable Energy Systems",
        "Switchgear & Protection",
        "Energy Management",
        "Elective"
      ],
      "6": [
        "Industrial Training",
        "Major Project",
        "Professional Ethics"
      ]
    }
  },

  /* ================= ELECTRONICS ENGINEERING ================= */
  Electronics: {

    "2nd": {
      "3": [
        "Analog Electronics",
        "Digital Electronics",
        "Network Analysis",
        "Electronic Devices",
        "Signals & Systems"
      ],
      "4": [
        "Microprocessors",
        "Communication Systems",
        "Control Systems",
        "PCB Design",
        "Elective"
      ]
    },

    "3rd": {
      "5": [
        "Embedded Systems",
        "Industrial Electronics",
        "Wireless Communication",
        "Consumer Electronics",
        "Elective"
      ],
      "6": [
        "Industrial Training",
        "Major Project",
        "Professional Practices"
      ]
    }
  },

  /* ================= COMPUTER ENGINEERING ================= */
  Computer: {

    "2nd": {
      "3": [
        "Programming in C",
        "Data Structures",
        "Computer Organization",
        "Operating Systems",
        "Database Management Systems"
      ],
      "4": [
        "Object Oriented Programming",
        "Computer Networks",
        "Web Technologies",
        "Java Programming",
        "Elective"
      ]
    },

    "3rd": {
      "5": [
        "Software Engineering",
        "Python Programming",
        "Mobile Application Development",
        "Cyber Security",
        "Elective"
      ],
      "6": [
        "Industrial Training",
        "Major Project",
        "Entrepreneurship Development"
      ]
    }
  }
},
/* =====================================================
   RGPV : MSC (2 YEARS | 4 SEMESTERS)
===================================================== */

MSc: {

  /* ================= COMPUTER SCIENCE ================= */
  ComputerScience: {
    "1st": {
      "1": [
        "Advanced Programming",
        "Discrete Mathematics",
        "Computer Organization",
        "Advanced Data Structures",
        "Research Methodology"
      ],
      "2": [
        "Operating Systems",
        "Database Management Systems",
        "Design & Analysis of Algorithms",
        "Software Engineering",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Machine Learning",
        "Web Technologies",
        "Cloud Computing",
        "Elective II"
      ],
      "4": [
        "Project / Dissertation",
        "Viva Voce"
      ]
    }
  },

  /* ================= MATHEMATICS ================= */
  Mathematics: {
    "1st": {
      "1": [
        "Advanced Algebra",
        "Real Analysis",
        "Linear Algebra",
        "Discrete Mathematics",
        "Research Methodology"
      ],
      "2": [
        "Complex Analysis",
        "Numerical Methods",
        "Probability Theory",
        "Operations Research",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Functional Analysis",
        "Optimization Techniques",
        "Mathematical Modeling",
        "Elective II"
      ],
      "4": [
        "Dissertation",
        "Viva Voce"
      ]
    }
  },

  /* ================= PHYSICS ================= */
  Physics: {
    "1st": {
      "1": [
        "Classical Mechanics",
        "Quantum Mechanics I",
        "Mathematical Physics",
        "Electrodynamics",
        "Research Methodology"
      ],
      "2": [
        "Quantum Mechanics II",
        "Solid State Physics",
        "Statistical Mechanics",
        "Nuclear Physics",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Particle Physics",
        "Condensed Matter Physics",
        "Computational Physics",
        "Elective II"
      ],
      "4": [
        "Dissertation",
        "Viva Voce"
      ]
    }
  },

  /* ================= CHEMISTRY ================= */
  Chemistry: {
    "1st": {
      "1": [
        "Inorganic Chemistry I",
        "Organic Chemistry I",
        "Physical Chemistry I",
        "Analytical Chemistry",
        "Research Methodology"
      ],
      "2": [
        "Inorganic Chemistry II",
        "Organic Chemistry II",
        "Physical Chemistry II",
        "Spectroscopy",
        "Elective I"
      ]
    },

    "2nd": {
      "3": [
        "Advanced Organic Synthesis",
        "Computational Chemistry",
        "Industrial Chemistry",
        "Elective II"
      ],
      "4": [
        "Dissertation",
        "Viva Voce"
      ]
    }
  }
},
/* =====================================================
   RGPV : PHD (RESEARCH PROGRAM)
===================================================== */

/* =====================================================
   RGPV : PhD (MINIMUM 3 YEARS | SEMESTER-MAPPED)
===================================================== */

PhD: {

  /* ================= ENGINEERING ================= */
  Engineering: {

    "1st": {
      "1": [
        "Research Methodology",
        "Advanced Mathematics / Tools",
        "Research Ethics",
        "Literature Review"
      ],
      "2": [
        "Advanced Subject (Area Specific)",
        "Research Proposal Preparation",
        "Seminar I"
      ]
    },

    "2nd": {
      "3": [
        "Problem Identification",
        "Research Work Phase I",
        "Paper Writing Techniques"
      ],
      "4": [
        "Research Work Phase II",
        "Journal Publication",
        "Progress Seminar"
      ]
    },

    "3rd": {
      "5": [
        "Advanced Research Work",
        "Pre-Submission Seminar"
      ],
      "6": [
        "Thesis Writing",
        "Thesis Submission",
        "Viva Voce"
      ]
    }
  },

  /* ================= SCIENCE ================= */
  Science: {

    "1st": {
      "1": [
        "Advanced Research Methodology",
        "Statistical Tools",
        "Research Ethics",
        "Literature Survey"
      ],
      "2": [
        "Subject Specialization",
        "Research Proposal",
        "Seminar I"
      ]
    },

    "2nd": {
      "3": [
        "Experimental Design",
        "Data Collection",
        "Research Work Phase I"
      ],
      "4": [
        "Advanced Research Work",
        "Journal Publication",
        "Progress Evaluation"
      ]
    },

    "3rd": {
      "5": [
        "Pre-Submission Presentation",
        "Thesis Drafting"
      ],
      "6": [
        "Final Thesis Submission",
        "Viva Voce"
      ]
    }
  },

  /* ================= MANAGEMENT ================= */
  Management: {

    "1st": {
      "1": [
        "Research Methodology",
        "Advanced Management Theories",
        "Quantitative Research Methods",
        "Research Ethics"
      ],
      "2": [
        "Literature Review",
        "Research Proposal",
        "Seminar I"
      ]
    },

    "2nd": {
      "3": [
        "Case Study Development",
        "Field Research",
        "Data Analysis"
      ],
      "4": [
        "Paper Publication",
        "Progress Seminar"
      ]
    },

    "3rd": {
      "5": [
        "Thesis Drafting",
        "Pre-Viva Presentation"
      ],
      "6": [
        "Final Thesis Submission",
        "Viva Voce"
      ]
    }
  }
},
BA: {

  /* ================= HISTORY ================= */
  History: {

    "1st": {
      "1": ["History of Ancient India", "Social Formations"],
      "2": ["Medieval Indian History", "Cultural History"]
    },

    "2nd": {
      "3": ["Modern Indian History", "World History"],
      "4": ["Indian National Movement", "Historical Methods"]
    },

    "3rd": {
      "5": ["Contemporary World History", "Elective I"],
      "6": ["Indian Society & Culture", "Project / Viva"]
    }
  },

  /* ================= POLITICAL SCIENCE ================= */
  PoliticalScience: {

    "1st": {
      "1": ["Political Theory", "Indian Constitution"],
      "2": ["Western Political Thought", "Public Administration"]
    },

    "2nd": {
      "3": ["Comparative Politics", "International Relations"],
      "4": ["Indian Political System", "Foreign Policy of India"]
    },

    "3rd": {
      "5": ["Human Rights", "Elective I"],
      "6": ["Political Ideologies", "Project / Viva"]
    }
  },

  /* ================= ECONOMICS ================= */
  Economics: {

    "1st": {
      "1": ["Micro Economics I", "Indian Economy"],
      "2": ["Micro Economics II", "Statistics for Economics"]
    },

    "2nd": {
      "3": ["Macro Economics I", "Public Finance"],
      "4": ["Macro Economics II", "International Economics"]
    },

    "3rd": {
      "5": ["Development Economics", "Elective I"],
      "6": ["Research Project", "Viva Voce"]
    }
  }
},
MA: {

  /* ================= ENGLISH ================= */
  English: {

    "1st": {
      "1": ["British Literature I", "Literary Criticism"],
      "2": ["British Literature II", "American Literature"]
    },

    "2nd": {
      "3": ["Indian Writing in English", "World Literature"],
      "4": ["Dissertation / Viva"]
    }
  },

  /* ================= HISTORY ================= */
  History: {

    "1st": {
      "1": ["Ancient Indian History", "Historical Theory"],
      "2": ["Medieval Indian History", "Research Methodology"]
    },

    "2nd": {
      "3": ["Modern Indian History", "World History"],
      "4": ["Dissertation / Viva"]
    }
  },

  /* ================= POLITICAL SCIENCE ================= */
  PoliticalScience: {

    "1st": {
      "1": ["Advanced Political Theory", "Indian Politics"],
      "2": ["International Politics", "Public Policy"]
    },

    "2nd": {
      "3": ["Comparative Politics", "Human Rights"],
      "4": ["Dissertation / Viva"]
    }
  }
},
MCom: {

  /* ================= ACCOUNTING ================= */
  Accounting: {

    "1st": {
      "1": ["Advanced Financial Accounting", "Business Statistics"],
      "2": ["Corporate Accounting", "Tax Planning"]
    },

    "2nd": {
      "3": ["Research Methodology", "Strategic Financial Management"],
      "4": ["Dissertation / Viva"]
    }
  },

  /* ================= MANAGEMENT ================= */
  Management: {

    "1st": {
      "1": ["Organizational Behaviour", "Managerial Economics"],
      "2": ["Marketing Management", "Financial Management"]
    },

    "2nd": {
      "3": ["Human Resource Management", "Business Research"],
      "4": ["Dissertation / Viva"]
    }
  }
},
BCom: {

  /* ================= GENERAL ================= */
  General: {

    "1st": {
      "1": ["Financial Accounting I", "Business Economics"],
      "2": ["Financial Accounting II", "Business Law"]
    },

    "2nd": {
      "3": ["Corporate Accounting", "Cost Accounting"],
      "4": ["Income Tax Law", "Auditing"]
    },

    "3rd": {
      "5": ["Financial Management", "Marketing Management"],
      "6": ["Project Work", "Viva Voce"]
    }
  },

  /* ================= COMPUTER APPLICATION ================= */
  ComputerApplication: {

    "1st": {
      "1": ["Computer Fundamentals", "Accounting Basics"],
      "2": ["MS Office", "Programming in C"]
    },

    "2nd": {
      "3": ["DBMS", "Web Technologies"],
      "4": ["E-Commerce", "Business Analytics"]
    },

    "3rd": {
      "5": ["Management Information Systems", "Elective"],
      "6": ["Project Work", "Viva"]
    }
  }
},
BSc: {

  /* ================= MATHEMATICS ================= */
  Mathematics: {

    "1st": {
      "1": ["Calculus I", "Algebra"],
      "2": ["Calculus II", "Trigonometry"]
    },

    "2nd": {
      "3": ["Differential Equations", "Linear Algebra"],
      "4": ["Real Analysis", "Numerical Methods"]
    },

    "3rd": {
      "5": ["Abstract Algebra", "Complex Analysis"],
      "6": ["Project / Viva"]
    }
  },

  /* ================= PHYSICS ================= */
  Physics: {

    "1st": {
      "1": ["Mechanics", "Mathematical Physics"],
      "2": ["Waves & Oscillations", "Thermal Physics"]
    },

    "2nd": {
      "3": ["Quantum Mechanics", "Electronics"],
      "4": ["Electromagnetism", "Solid State Physics"]
    },

    "3rd": {
      "5": ["Nuclear Physics", "Elective"],
      "6": ["Project / Viva"]
    }
  },

  /* ================= COMPUTER SCIENCE ================= */
  ComputerScience: {

    "1st": {
      "1": ["Computer Fundamentals", "Programming in C"],
      "2": ["Data Structures", "Discrete Mathematics"]
    },

    "2nd": {
      "3": ["Operating Systems", "DBMS"],
      "4": ["Computer Networks", "Software Engineering"]
    },

    "3rd": {
      "5": ["Web Technologies", "Python Programming"],
      "6": ["Project / Viva"]
    }
  }
},
DualDegree: {

  /* ================= BSc + MSc (Computer Science) ================= */
  BSc_MSc_ComputerScience: {

    /* ---------- YEAR 1 ---------- */
    "1st": {
      "1": [
        "Computer Fundamentals",
        "Programming in C",
        "Mathematics I",
        "Communication Skills"
      ],
      "2": [
        "Data Structures",
        "Discrete Mathematics",
        "Digital Logic",
        "Environmental Studies"
      ]
    },

    /* ---------- YEAR 2 ---------- */
    "2nd": {
      "3": [
        "Object Oriented Programming",
        "Operating Systems",
        "Computer Organization",
        "Mathematics II"
      ],
      "4": [
        "Database Management Systems",
        "Software Engineering",
        "Computer Networks",
        "Python Programming"
      ]
    },

    /* ---------- YEAR 3 ---------- */
    "3rd": {
      "5": [
        "Design & Analysis of Algorithms",
        "Web Technologies",
        "Artificial Intelligence",
        "Elective I"
      ],
      "6": [
        "Machine Learning",
        "Compiler Design",
        "Cloud Computing",
        "Elective II"
      ]
    },

    /* ---------- YEAR 4 (MSc LEVEL STARTS) ---------- */
    "4th": {
      "7": [
        "Advanced Algorithms",
        "Advanced DBMS",
        "Research Methodology",
        "Elective III"
      ],
      "8": [
        "Deep Learning",
        "Big Data Analytics",
        "Distributed Systems",
        "Elective IV"
      ]
    },

    /* ---------- YEAR 5 ---------- */
    "5th": {
      "9": [
        "Advanced Machine Learning",
        "Natural Language Processing",
        "Elective V"
      ],
      "10": [
        "Major Dissertation",
        "Viva Voce"
      ]
    }
  },

  /* ================= BA + MA (Economics) ================= */
  BA_MA_Economics: {

    "1st": {
      "1": [
        "Micro Economics I",
        "Mathematical Methods",
        "Indian Economy"
      ],
      "2": [
        "Micro Economics II",
        "Statistics for Economics",
        "Public Finance"
      ]
    },

    "2nd": {
      "3": [
        "Macro Economics I",
        "Development Economics",
        "Research Basics"
      ],
      "4": [
        "Macro Economics II",
        "International Economics",
        "Indian Economic Policy"
      ]
    },

    "3rd": {
      "5": [
        "Econometrics I",
        "Financial Economics",
        "Elective I"
      ],
      "6": [
        "Econometrics II",
        "Environmental Economics",
        "Elective II"
      ]
    },

    /* ---------- MA LEVEL ---------- */
    "4th": {
      "7": [
        "Advanced Micro Economics",
        "Advanced Macro Economics",
        "Research Methodology"
      ],
      "8": [
        "Applied Econometrics",
        "Economic Planning",
        "Elective III"
      ]
    },

    "5th": {
      "9": [
        "Advanced Development Economics",
        "Dissertation Work"
      ],
      "10": [
        "Dissertation Submission",
        "Viva Voce"
      ]
    }
  },

  /* ================= BCom + MCom ================= */
  BCom_MCom: {

    "1st": {
      "1": [
        "Financial Accounting I",
        "Business Economics",
        "Business Communication"
      ],
      "2": [
        "Financial Accounting II",
        "Business Law",
        "Business Statistics"
      ]
    },

    "2nd": {
      "3": [
        "Corporate Accounting",
        "Cost Accounting",
        "Income Tax Law"
      ],
      "4": [
        "Auditing",
        "Financial Management",
        "Marketing Management"
      ]
    },

    "3rd": {
      "5": [
        "Company Law",
        "Human Resource Management",
        "Elective I"
      ],
      "6": [
        "Strategic Management",
        "Entrepreneurship Development",
        "Elective II"
      ]
    },

    /* ---------- MCom LEVEL ---------- */
    "4th": {
      "7": [
        "Advanced Financial Accounting",
        "Business Research Methods",
        "Corporate Finance"
      ],
      "8": [
        "Strategic Financial Management",
        "International Business",
        "Elective III"
      ]
    },

    "5th": {
      "9": [
        "Advanced Taxation",
        "Dissertation Work"
      ],
      "10": [
        "Dissertation Submission",
        "Viva Voce"
      ]
    }
  }
}


};


/* ======================= HELPERS ======================= */

function cseBranch() {
  return {
    "2nd": {
      "3": [
        "Discrete Mathematics",
        "Computer Organization",
        "Object Oriented Programming",
        "Operating Systems",
        "Python Programming"
      ],
      "4": [
        "Design & Analysis of Algorithms",
        "Database Management Systems",
        "Software Engineering",
        "Computer Networks",
        "Theory of Computation"
      ]
    },
    "3rd": {
      "5": [
        "Machine Learning",
        "Web Technologies",
        "Compiler Design",
        "Cloud Computing",
        "Elective I"
      ],
      "6": [
        "Artificial Intelligence",
        "Big Data Analytics",
        "Cyber Security",
        "Mobile Computing",
        "Elective II"
      ]
    },
    "4th": {
      "7": ["Elective III", "Internship"],
      "8": ["Major Project"]
    }
  };
}

function electronicsBranch() {
  return {
    "2nd": {
      "3": [
        "Signals and Systems",
        "Analog Electronics",
        "Network Theory",
        "Electronic Devices",
        "Probability Theory"
      ],
      "4": [
        "Digital Communication",
        "Control Systems",
        "Microprocessors",
        "VLSI Design",
        "Elective I"
      ]
    },
    "3rd": {
      "5": [
        "Embedded Systems",
        "Wireless Communication",
        "Digital Signal Processing",
        "Optical Communication",
        "Elective II"
      ],
      "6": [
        "Antenna Theory",
        "Satellite Communication",
        "Internet of Things",
        "Radar Systems",
        "Elective III"
      ]
    },
    "4th": {
      "7": ["Industrial Training"],
      "8": ["Major Project"]
    }
  };
}
