import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import ExperienceAccordion from "../../containers/experienceAccordion/ExperienceAccordion.js";
import "./Experience.css";
//import { experience } from "../../portfolio.js";
import { Fade } from "react-reveal";
import ExperienceImg from "./ExperienceImg";

const experience = {
  title: "Experience",
  subtitle: "Internships",
  description:
    "During my internships, I gained valuable hands-on experience in software development, automation, and project management. I developed proficiency in key technologies such as React.js, UiPath, and .NET, and honed my problem-solving skills by working on real-world projects. These experiences enhanced my ability to collaborate in a team setting, manage tasks efficiently, and apply theoretical knowledge to practical situations, further preparing me for the professional tech industry.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Project Management and Development Intern",
          company: "State Bank of Pakistan",
          company_url: "https://www.sbp.org.pk/index.html",
          logo_path: "sbp.png",
          duration: "June 2024 - August 2024",
          location: "Karachi, Pakistan",
          description:
            "Developed an RPA solution using UiPath Studio for automated data mining and report generation, enhancing financial stability assessment. Gained hands-on experience with React.js and React Native to contribute to internal front-end development projects.",
          color: "#ee3c26",
        },
        {
          title: "Software Development Intern ",
          company: "iPATH Pvt Ltd",
          company_url: "https://ipath.tech/",
          logo_path: "ipath.png",
          duration: "June 2023 - July 2023",
          location: "Karachi, Pakistan",
          description:
            "Designed and implemented a .NET-based API data transformation simulator, streamlining data parsing for the QA team. Improved data conversion and response handling, optimizing internal systems for better performance and accuracy",
          color: "#0071C5",
        },
      ],
    },
  ],
};

class Experience extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="experience-main">
        <Header theme={theme} />
        <div className="basic-experience">
          <Fade bottom duration={2000} distance="40px">
            <div className="experience-heading-div">
              <div className="experience-heading-img-div">
                {/* <img
									src={require(`../../assets/images/${experience["header_image_path"]}`)}
									alt=""
								/> */}
                <ExperienceImg theme={theme} />
              </div>
              <div className="experience-heading-text-div">
                <h1
                  className="experience-heading-text"
                  style={{ color: theme.text }}
                >
                  {experience.title}
                </h1>
                <h3
                  className="experience-heading-sub-text"
                  style={{ color: theme.text }}
                >
                  {experience["subtitle"]}
                </h3>
                <p
                  className="experience-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <ExperienceAccordion sections={experience["sections"]} theme={theme} />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Experience;
