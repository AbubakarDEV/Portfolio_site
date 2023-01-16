import styled from "styled-components";

export const ProfileImg = styled.img`
  position: absolute;
  top: 140px;
  right: 0px;
  width: 310px;
  border-radius: 20px;
  @media (max-width: 1000px) {
    top: 150px;
    right: 22px;
    width: 220px;
  }
  @media (max-width: 770px) {
    top: 150px;
    right: 22px;
    width: 150px;
  }
  @media (max-width: 640px) {
    top: 3px;
    left: 22px;
    width: 120px;
  }
`;
