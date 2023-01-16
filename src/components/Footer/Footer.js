import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call/Whatsapp</LinkTitle>
          <LinkItem href="tel:314-343-3432">+92 317-5869469</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            abubakarjilani99@gamil.com
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Skype</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            abubakar JILANI
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Location</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            Islamabad, Pakistan
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target={"_blank"} href="https://github.com/AbubakarDEV">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            target={"_blank"}
            href="https://www.linkedin.com/in/abubakar-jilani/"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons
            target={"_blank"}
            href="https://www.instagram.com/abubakar_jilanii/"
          >
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
