import React from "react";
import { Link } from "react-router-dom";
import * as Styled from "./JobCard.styles";

const JobCard = () => {
  return (
    <Styled.JobCard>
      <Styled.Company>SmartReqruiters</Styled.Company>
      <Styled.JobTitle>Frontend Engineer</Styled.JobTitle>
      <Styled.Information>
        <span>Berlin</span>
        <span>full-time</span>
      </Styled.Information>
      <Styled.LinkHolder>
        <Link to="job-list">Read more..</Link>
      </Styled.LinkHolder>
    </Styled.JobCard>
  );
};

export default JobCard;
