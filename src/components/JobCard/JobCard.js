import React from "react";
import Icon from "../UI/Icon/Icon";
import { ALink as Link } from "./../UI/Link/Link";
import * as Styled from "./JobCard.styles";

const JobCard = ({ companyName, position, id, location, typeOfEmployment }) => {
  return (
    <Styled.JobCard>
      <Styled.Company>{companyName}</Styled.Company>
      <Styled.JobTitle>{position}</Styled.JobTitle>
      <Styled.Information>
        <span>
          <Icon name="Location" />
          {location}
        </span>
        <span>
          <Icon name="Contract" />
          {typeOfEmployment}
        </span>
      </Styled.Information>
      <Styled.LinkHolder>
        <Link to={`job-details/${id}`}>Read more..</Link>
      </Styled.LinkHolder>
    </Styled.JobCard>
  );
};

export default JobCard;
