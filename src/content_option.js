const logotext = "MATTHEW";
const meta = {
    title: "Matthew Pham",
    description: "Software, Data & Platform Engineer | CS & Data Science @ UT Austin ('27)",
};

const introdata = {
    title: "I’m Matthew Pham",
    animated: {
        first: "I build cloud platforms",
        second: "I engineer data pipelines",
        third: "I write systems code",
    },
    description: "Building resilient cloud infrastructure, scalable data pipelines, and low-level systems. I bridge high-throughput backend architecture (Kubernetes, Argo Workflows, Snowflake) and full-stack application development.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a senior at The University of Texas at Austin pursuing a B.S. in Computer Science with a minor in Statistics and Data Science (May 2027). My focus sits at the intersection of platform engineering, distributed data workflows, and systems programming. This summer I was a Platform / Investment Management Data Engineering Intern at William Blair in Chicago, working on the Bedrock Modernization initiative: migrating legacy financial workflows onto cloud-native infrastructure with Kubernetes, Docker, Argo Workflows, and Snowflake. Before that I built full-stack verification systems and REST APIs at Civic Housing and data pipelines at Loan Ranger Capital. Whether it's kernel-level C, containerized data pipelines, or statistical models in Python, I care about systems that are observable, fault-tolerant, and fast.",
};

const worktimeline = [
    {
        jobtitle: "Platform & Data Engineering Intern",
        where: "William Blair, Chicago",
        date: "Jun – Aug 2026",
    },
    {
        jobtitle: "Software Engineer",
        where: "Civic Housing, Austin",
        date: "Jan – May 2026",
    },
    {
        jobtitle: "Data Analyst Intern",
        where: "Loan Ranger Capital, Austin",
        date: "May – Jul 2024",
    },
    {
        jobtitle: "B.S. Computer Science",
        where: "UT Austin",
        date: "2023 – May 2027",
    },
];

const skills = [
    { name: "Languages", value: "Python, C, C++, Go, Java, TypeScript, JavaScript, SQL, HTML/CSS" },
    { name: "Cloud, DevOps & Platform", value: "Docker, Kubernetes, Argo Workflows, Linux/Unix, CI/CD, Git" },
    { name: "Data Engineering", value: "Snowflake, Apache Kafka, Azure Data Lake Storage, PostgreSQL, ETL pipelines" },
    { name: "Web & Backend", value: "React, Flask, REST API design, Microservices" },
    { name: "Data Science & ML", value: "Statistical modeling, regression, regularization, decision trees, Pandas, NumPy, Scikit-learn" },
    { name: "Systems", value: "OS kernel development, multithreading, virtual memory, 5-stage CPU pipelining" },
    { name: "AI Workflow", value: "Claude Code, Cursor, Codex" },
];

const services = [
    {
        title: "Platform & Cloud Infrastructure",
        description: "Containerizing applications with Docker, orchestrating multi-step workflows on Kubernetes and Argo, and migrating legacy workloads to modern cloud architectures.",
    },
    {
        title: "Data Pipeline & ETL Architecture",
        description: "Designing fault-tolerant ingestion and validation pipelines using Python, SQL, Snowflake, ADLS, and Apache Kafka.",
    },
    {
        title: "Backend & Full-Stack Development",
        description: "Responsive React/TypeScript frontends and scalable REST APIs in Python (Flask) and Go, with automated third-party API integrations.",
    },
    {
        title: "Systems Programming & Statistical Modeling",
        description: "Low-level C/C++ systems software, and statistical learning methods applied to messy real-world datasets.",
    },
];

// img values are placeholders until real project images are added
const dataportfolio = [
    {
        img: "https://picsum.photos/400/?grayscale&random=1",
        description: "Pintos OS Kernel (C, x86 asm, GDB): priority scheduling, synchronization primitives, system calls, virtual memory with demand paging.",
        link: "https://github.com/matthewpham16",
    },
    {
        img: "https://picsum.photos/400/600/?grayscale&random=2",
        description: "Civic Housing Verification Platform (Python, Flask, React): automated document and applicant verification replacing manual checks.",
        link: "https://github.com/matthewpham16",
    },
    {
        img: "https://picsum.photos/400/300/?grayscale&random=3",
        description: "5-Stage Pipelined CPU (C): hazard detection, data forwarding, and stalling logic in a simulated processor.",
        link: "https://github.com/matthewpham16",
    },
    {
        img: "https://picsum.photos/400/700/?grayscale&random=4",
        description: "Predictive Milk Yield Analysis (Python, Scikit-learn): regression pipelines over 250,000+ inputs with feature importance and regularization.",
        link: "https://github.com/matthewpham16",
    },
    {
        img: "https://picsum.photos/400/550/?grayscale&random=5",
        description: "Sports Analytics & ML (Python, SQL): classification and regression models across F1, PGA, NFL, and MLB data, optimizing ROC-AUC.",
        link: "https://github.com/matthewpham16",
    },
];

const contactConfig = {
    YOUR_EMAIL: "mattpham016@gmail.com",
    YOUR_FONE: "832-746-6047",
    description: "Based in Austin, TX. Email is the best way to reach me; I'm happy to talk about platform engineering, data pipelines, or systems projects.",
};

const socialprofils = {
    github: "https://github.com/matthewpham16",
    linkedin: "https://www.linkedin.com/in/matthew-pham16",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
