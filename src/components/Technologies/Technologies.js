import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Javascript
            <br />
            React.js (CSR)
            <br />
            Next.js (SSR)
            <br />
            Material UI / Styled Component
            <br />
            BootStrap / Ant Design
            <br />
            Tailwind CSS / Daisy UI
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js <br />
            Express.js <br />
            Mongodb <br />
            MySql
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListContainer>
        <ListTitle>Front-End Concepts</ListTitle>
        <ListParagraph>
          Experiece with <br />
          Responsive Web design
          <br />
          Reuseable Web Components
          <br />
          Object-Oriented Programming
          <br />
          Server-side and client-side Rendering
          <br />
          State Management
          <br />
          Context API and Redux
        </ListParagraph>
      </ListContainer>
      <ListContainer>
        <ListTitle>Tools</ListTitle>
        <ListParagraph>
          Experiece with <br />
          VS code
          <br />
          Git and Github
          <br />
          Microsoft Office (MS Word, Microsoft teams, MS PowerPoint, MS Excel)
          <br />
          MobaXterm
          <br />
          Asana
          <br />
          NPM, NPX,Yarn
          <br />
          Dockers / CI/CD
        </ListParagraph>
      </ListContainer>
      <ListContainer>
        <ListTitle>Deploy</ListTitle>
        <ListParagraph>
          Experiece with <br />
          Netlify
          <br />
          Heroku
        </ListParagraph>
      </ListContainer>
      <ListContainer>
        <ListTitle>API Dashboard</ListTitle>
        <ListParagraph>
          Experiece with <br />
          Taffy
          <br />
          Swagger
        </ListParagraph>
      </ListContainer>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
