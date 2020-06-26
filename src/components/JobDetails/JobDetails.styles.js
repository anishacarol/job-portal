import styled from "styled-components";

export const JobDetails = styled.div`
  min-height: 90px;
  background: #fff;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
`;

export const Company = styled.span`
  display: block;
  color: rgb(155, 155, 155);
  margin-bottom: 14px;
  font-size: 1.4rem;
`;

export const JobTitle = styled.span`
  display: block;
  color: rgb(28, 28, 28);
  color: rgb(28, 28, 28);
  font-weight: 600;
  margin-bottom: 20px;
  font-size: 1.6rem;
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
    font-size: 1rem;
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
    align-self: flex-start;
    margin-bottom: 30px;
  }
`;

export const Detail = styled.div`
  margin-top: 40px;
  font-size: 0.9rem;
  color: #353535;
  line-height: 30px;
`;
