/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Shayan's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Shayan Haider Portfolio",
    type: "website",
    url: "http://ShayanHaider.com/",
  },
};

//Home Page
const greeting = {
  title: "Shayan Haider",
  logo_name: "ShayanHaider",
  nickname: "",
  subTitle:
    "I'm a tech enthusiast and problem solver who loves turning ideas into reality through code. With a strong foundation in AI, software development, and automation, I enjoy building smart solutions that make life easier 🚀",
  resumeLink:
    "https://drive.google.com/file/d/125xQsRQSTINdm3dUdb_snx0YaXqj6eO3/view?usp=sharing",
  portfolio_repository: "https://github.com/ShayanHaider20",
  githubProfile: "https://github.com/ShayanHaider20",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/ShayanHaider20",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/shayan-haider-64ba46274/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:AHAHAHAHAHAAH@gmail.com?subject=Let's%20Connect!",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "🧠🔧  Experience in building and fine-tuning models using TensorFlow and Keras for AI applications, including image classification through Computer Vision and NLP tasks.",
        "📊🔄 Proficient in NumPy and Pandas for efficient data handling, preprocessing, and feature engineering.",
        "📉📚 Used Matplotlib and Jupyter Notebook to analyze model performance, visualize datasets, and interpret predictions.",
        "🧮📚 Implemented models using Scikit-learn for supervised and unsupervised learning, including regression, classification, and clustering techniques.",
        "🗣️🤖 Worked with large language models (LLMs) for NLP tasks and currently exploring LangChain for AI-driven automation and advanced conversational AI applications.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Scikitlearn",
          fontAwesomeClassname: "skill-icons:scikitlearn-light",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },

        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "logos:matplotlib-icon",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },

        {
          skillName: "Jupyter Notebook",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },

        {
          skillName: "Pandas",
          fontAwesomeClassname: "devicon-plain:pandas-wordmark",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },

        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "🌐⚙️ Built end-to-end applications using HTML, CSS, JavaScript, React.js, and Python (Django), while creating scalable backends with Node.js and Express.js. Integrated MongoDB and SQLite3 for efficient data management, ensuring smooth and dynamic user experiences across both web and mobile platforms.",
        "📱🧑‍💻 Currently learning Flutter to develop cross-platform mobile applications, gaining hands-on experience in building high-performance, visually appealing UIs, and ensuring smooth functionality across both iOS and Android.",
        "🧑‍🤝‍🧑🔄 Proficient in Git and GitHub for managing code repositories, handling branches, and collaborating effectively within development teams.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "devicon:bootstrap",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React.js",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "devicon:express",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "devicon:python",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django-icon",
          style: {
            color: "#339933",
          },
        },

        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "devicon:git",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "mdi:github",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud, Containerization, and Automation Tools",
      fileName: "CloudInfraImg",
      skills: [
        "🐳 Containerized the full-stack application. Implemented multi-stage builds for optimized and lightweight Docker images.",
        "☁️ Deployed the application on Azure, ensuring scalability, reliability, and high availability.",
        "🔄 Integrated CI/CD pipelines for automated deployment and continuous updates.",
        "🔍 Exploring Firebase for real-time databases, AWS (EC2, S3, RDS) for cloud services and PostgreSQL.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "skill-icons:githubactions-light",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Github Pages",
          fontAwesomeClassname: "simple-icons:githubpages",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "devicon:vercel-wordmark",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "FAST NUCES Karachi",
      subtitle: "BS in Computer Science",
      logo_path: "fast_logo.png",
      alt_name: "",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ CS Fundamentals such as algorithms, data structures, computer architecture, and operating systems, laying the groundwork for problem-solving and computational theory.",
        "⚡ Mastery of various programming languages like C, Javascript, Python and development tools, along with software engineering principles and methodologies like Agile.",
        "Exposure to AI concepts, including neural networks, natural language processing, and machine learning algorithms, and deep learning.",
        "⚡ Awarded 6 Dean's List honors (GPA 3.5+), 1 Rector's List (GPA 4.0), and received a scholarship for academic excellence.",
      ],
      website_link: "https://khi.nu.edu.pk/",
    },
    {
      title: "DJ Sindh Government Science College",
      subtitle: "College Degree",
      logo_path: "DJ.svg",
      alt_name: "",
      duration: "2019 - 2021",
      descriptions: [
        "Achieved 95%.",
        "Ranked in the Top 50 students in Pre-Engineering all over Karachi.",
      ],
      website_link: "https://thedjarians.org/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AI for Everyone",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/MWMM2S85MFQR",
      alt_name: "deeplearning.ai",
      color_code: "#8C151599",
    },
    {
      title: "Generative AI for Everyone",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/4W2JVKZELDQC",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Crash Course on Python",
      subtitle: "",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/IY0BA22JJE3M",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Prompt Engineering",
      subtitle: "- Andrew NG",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://learn.deeplearning.ai/accomplishments/836e84d6-0e3e-4a5a-980b-1d10e9eecb01?usp=sharing",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Google AI Essentials",
      subtitle: "",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FRYVH59PEC90",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Play It Safe: Manage Security Risks",
      subtitle: "",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/K2OTBEBZMFYC",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
    {
      title: "Connect and Protect: Networks and Network Security",
      subtitle: "",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/HS74E4INT5GM",
      alt_name: "Google",
      color_code: "#D83B0199",
    },
    {
      title: "Foundations of Cyber Security",
      subtitle: "",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/00ZQGBXJLBN5",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked on diverse and impactful projects that span across AI, deep learning, computer vision, full-stack application development, deployment, and containerization. These projects showcase my proficiency in building end-to-end solutions, from designing machine learning models for tasks like sentiment analysis and disease detection, to developing full-stack applications using modern frameworks and deploying them efficiently using containers.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Shayan_Image.JPG",
    description:
      "Feel free to reach out! Whether it's about AI, web development, or a new project idea, I'm always open to discussions. Drop a message, and let's connect! 🚀",
  },
  blogSection: {},
  addressSection: {
    title: "Address",
    subtitle: "A-63 Sector A Amroha Society, Scheme 33, Karachi, Pakistan",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/en3qHxc5SXqA8Gkd7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
