import styled from "styled-components";

export const JobCard = styled.div`
  min-height: 90px;
  background: #fff;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  }
`;

export const Company = styled.span`
  display: block;
  color: rgb(155, 155, 155);
  margin-bottom: 14px;
`;

export const JobTitle = styled.span`
  display: block;
  color: rgb(28, 28, 28);
  color: rgb(28, 28, 28);
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 16px;
`;

export const Information = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    span {
      margin-bottom: 30px;
    }
  }
  span {
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-right: 30px;
    svg {
      margin-right: 10px;
    }
  }
`;

export const LinkHolder = styled.div`
  align-self: flex-end;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    text-align: center;
    a {
      width: 100%;
    }
  }
`;
