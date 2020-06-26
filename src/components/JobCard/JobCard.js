import React from "react";
import { Link } from "react-router-dom";
import Icon from "../UI/Icon/Icon";
import * as Styled from "./JobCard.styles";

const JobCard = () => {
  return (
    <Styled.JobCard>
      <Styled.Company>SmartReqruiters</Styled.Company>
      <Styled.JobTitle>Frontend Engineer</Styled.JobTitle>
      <Styled.Information>
        <span>
          <Icon name="Location" />
          Berlin
        </span>
        <span>
          <Icon name="Contract" />
          Full-time
        </span>
      </Styled.Information>
      <Styled.LinkHolder>
        <Link to="job-details">Read more..</Link>
      </Styled.LinkHolder>
    </Styled.JobCard>
  );
};

export default JobCard;
