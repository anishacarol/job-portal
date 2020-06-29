import styled from "styled-components";

export const App = styled.div`
  width: 900px;
  margin: 0 auto;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    width: 98%;
    margin: 0 1%;
  }
`;
export const Header = styled.header`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
    color: rgb(41, 189, 186);
  }
`;
