import type { ProfessionalExperience } from "./ExperienceCard";

export const professionalExperience: ProfessionalExperience[] = [
  {
    role: "SAIC – Software Engineer",
    location: "New York, NY",
    time: "March 2025 – Present",
    summary:
      "Built a Django REST Framework API to automate ingestion and processing of scanned tax documents for IRS modernization, reducing manual input by 70% and accelerating development by 30% through Agile collaboration and efficient backend delivery.",
    bullets: [
      {
        text: "Contributed to development effort of a RESTful API using Django REST Framework to automate the ingestion of scanned tax documents as part of IRS modernization efforts, reducing manual data entry and decreasing human effort by an estimated 70%.",
      },
      {
        text: "Leveraged Python to send scanned tax documents from Cloud Storage buckets to specific parsers in Document AI for further data extraction.",
      },
      {
        text: "Collaborated within a fast-paced Agile team to design, develop, and deploy backend features using Django, and documented RESTful APIs using Swagger OpenAPI; actively participated in sprint planning and daily standups to ensure delivery of high-priority functionality on schedule, accelerating development cycles by 30%.",
      },
    ],
    skills: ["Python", "Django", "Agile", "RESTful API", "GCP", "Swagger"],
  },
  {
    role: "Guidehouse – Software Engineer (Data)",
    location: "New York, NY",
    time: "March 2024 – February 2025",
    summary:
      "Developed a scalable AWS ETL pipeline for the Library of Congress to automate employee data ingestion, cutting manual effort by 0.5 FTE. Developed reusable Python modules, enforced secure data practices, and ensured seamless handoff through cross-functional collaboration. Created a responsive front-end application with React for the National Institutes of Health (NIH) used for new employee onboarding.",
    bullets: [
      {
        text: "Developed an end-to-end ETL pipeline for the Library of Congress to simplify and automate data ingestion of employee data from CSV files to a PostgreSQL database, utilising AWS cloud infrasturcture.",
      },
      {
        text: "Created the database with AWS RDS to minimize client overhead of managing database infrastructure and provide high availability and security for sensitive federal employee data.",
      },
      {
        text: "Transformed and cleaned data into a structured PostgreSQL database, simplifying access and streamlining utilization for the client’s teams.",
      },
      {
        text: "Contributed to custom reusable Python modules designed for AWS Lambda and Glue services reducing development efforts by 30%.",
      },
      {
        text: "Designed an event-driven AWS solution that automated HR data updates, saving ~20 hours of manual data entry per week (0.5 FTE).",
        subBullets: [
          "Created event-based AWS Lambda functions in Python (Pandas and Numpy) triggered by file uploads to S3 buckets.",
          "Validated input data against client-specified formats, ensuring accurate field mapping to an RDS database and initiating a Python-based AWS Glue job for data processing.",
          "Developed an AWS Glue job in Python to perform data validation and cleansing, and data loading into an AWS RDS database.",
          "Monitored metrics and logs of workflow infrastructure in AWS CloudWatch for error tracking.",
          "Managed IAM roles and permissions to give services minimum amount of access to each other and be able to perform all processes.",
        ],
      },
      {
        text: "Built a responsive front-end application with React for the National Institutes of Health (NIH) used for new employee onboarding.",
      },
      {
        text: "Led stakeholder meetings and provided hands-on training to ensure successful handoff of tools and solutions.",
      },
    ],
    skills: ["AWS", "Python", "ETL", "JavaScript", "React", "Tailwind"],
  },
  {
    role: "Ecosystem – Mechanical Designer",
    location: "New York, NY",
    time: "August 2020 – February 2024",
    summary:
      "Engineered data-driven energy systems for large-scale projects, applying modeling and optimization to reduce energy use by 25%. Developed reusable design tools and collaborated cross-functionally.",
    bullets: [
      {
        text: "Designed and optimized energy systems for large-scale buildings and campuses, collaborating with engineers and architects to integrate solutions into complex project scopes.",
      },
      {
        text: "Applied mathematical modeling and thermodynamic principles to improve HVAC and energy recovery systems, reducing energy consumption by up to 25% across retrofit projects.",
      },
      {
        text: "Developed reusable CAD templates and parametric models to accelerate design workflows.",
      },
      {
        text: "Partnered with multidisciplinary teams to deliver high-performance building designs on time and within budget, translating client energy goals into measurable engineering specifications",
      },
    ],
    skills: [
      "AutoCAD",
      "Documentation",
      "Mechanical System Design",
      "Mathematical Modeling",
    ],
  },
  {
    role: "BE3 – Mechanical Engineering Associate",
    location: "Austin, TX",
    time: "September 2019 – August 2020",
    summary:
      "Created data-driven system models using AutoCAD and Revit, streamlining design workflows and supporting performance analysis. Applied iterative problem-solving and diagnostic skills to resolve complex system issues",
    bullets: [
      {
        text: "Utilized AutoCAD and Revit to create accurate, data-driven models of mechanical systems based on architectural and engineering requirements.",
      },
      {
        text: "Contributed to building performance analysis using engineering software, streamlining calculation workflows.",
      },
      {
        text: "Conducted site visits and created redlines to resolve design discrepancies, strengthening diagnostic and iterative problem.",
      },
    ],
    skills: ["AutoCAD", "Technical Communication", "System Optimization"],
  },
];
