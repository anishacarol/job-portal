import { Link } from "react-router-dom";
import styled from "styled-components";

export const ALink = styled(Link)`
  background-color: rgb(41, 189, 186);
  color: rgb(255, 255, 255);
  cursor: pointer;
  padding: 12px 30px;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background-color: rgb(0, 64, 85);
  }
`;
