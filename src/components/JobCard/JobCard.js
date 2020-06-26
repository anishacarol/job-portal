import React from "react";
import { Link } from "react-router-dom";
import Icon from "../UI/Icon/Icon";
import * as Styled from "./JobCard.styles";

const JobCard = ({ companyName, position, id }) => {
  return (
    <Styled.JobCard>
      <Styled.Company>{companyName}</Styled.Company>
      <Styled.JobTitle>{position}</Styled.JobTitle>
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
        <Link to={`job-details/${id}`}>Read more..</Link>
      </Styled.LinkHolder>
    </Styled.JobCard>
  );
};

export default JobCard;
