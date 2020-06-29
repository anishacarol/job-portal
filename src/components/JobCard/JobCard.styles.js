import styled from "styled-components";

export const JobCard = styled.div`
  min-height: 90px;
  background: #fff;
  padding: 15px 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
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
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 18px;
`;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Information = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    span {
      margin-bottom: 18px;
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
  align-self: center;
  margin-top: 50px;
  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    margin-top: 0;
    text-align: center;
    a {
      width: 100%;
    }
  }
`;
