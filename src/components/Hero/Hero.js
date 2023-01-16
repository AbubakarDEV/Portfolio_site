import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Abubakar Jilani <br />
          <div style={{ fontSize: 40 }}>MERN Stack Developer</div>
        </SectionTitle>

        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I am a Full Stack MERN Stack developer, with a strong command of the
          Frontend technology. I continuously work on improving my skillset on a
          daily basis. I love working with a Team, and I also enjoy working
          alone. I develop attractive and Optimized websites, with accessibility
          kept in mind.
        </SectionText>

        <Button>
          <a
            style={{ textDecoration: "none" }}
            href={"/images/resume.pdf"}
            target="_blank"
          >
            Download Resume
          </a>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
