/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Soumi_Mandal.jpg;

const imageAltText = "Passport size photo of myself";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "WORK EXPERIENCE",
    description:
      "Company Name: Euphoria Genx",
      "Role: Web Developer Internship:,
      "Achieved experience in backend development and knowledge in J2EE environment and tomcat server",
  },
  {
    title: "EDUCATIONS",
    description:
      "Master Of Computer Application",
      "Sister Nivedita University",
  },
  {
    title: "My Resume Site",
    description:
      "Here is my resume link",
    url: "https://drive.google.com/file/d/1SI675eolbLwB5-QPE4H6ZX2-wQkZNEKK/view?usp=drivesdk",
  },
  {
    title: "GitHub portfolio site",
    description:
      "Created a basic portfolio website using HTML, CSS",
    url: "https://soumi-mandal.github.io/Soumi_Mandal_Portfolio/",
  },
  {
    title: "PROJECTS",
    description:
      "Art website using JSP and Servlet",
      "frontend: HTML, CSS, Javascript",
      "Backend: Java",
      "Database: MySql",
  },
  {
    title: "PROJECTS",
    description:
      "Image authentication with signature watermarking [Cryptography]",
      "language used: C programmimg language:,
      "Image format: BMP Image",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
