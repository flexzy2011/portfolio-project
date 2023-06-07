import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://www.seekpng.com/png/detail/53-535515_view-original-cool-guy-cartoon-png.png"
            alt=""
          />
          <div className="AboutBio">
            Hello! My name is <strong>Felix Akinloye</strong> I'm a Frontend web developer with 1 year of experience
            in WEB DEVELOPMENT and CODING, I use technologies such as <strong>HTML, CSS, Javascript, DOM,
                Git, Bootstrap and React.js </strong> to develop and manage responsive, user-friendly and visually appealing
                websites.
            
          </div>
          <div className="AboutBio tagline2">
            I have improved my technical skills using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;