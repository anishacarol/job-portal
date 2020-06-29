import React from "react";
import Icon from "../UI/Icon/Icon";
import { ALink as Link } from "./../UI/Link/Link";
import * as Styled from "./JobCard.styles";

const JobCard = ({
  companyName,
  position,
  id,
  city,
  country,
  typeOfEmployment
}) => {
  return (
    <Styled.JobCard>
      <Styled.JobInfo>
        <Styled.Company>{companyName}</Styled.Company>
        <Styled.JobTitle>{position}</Styled.JobTitle>
        <Styled.Information>
          <span>
            <Icon name="Location" />
            {`${city} , ${country}`}
          </span>
          <span>
            <Icon name="Contract" />
            {typeOfEmployment}
            {console.log(typeOfEmployment)}
          </span>
        </Styled.Information>
      </Styled.JobInfo>
      <Styled.LinkHolder>
        <Link to={`job-details/${id}`}>Read more ></Link>
      </Styled.LinkHolder>
    </Styled.JobCard>
  );
};

export default JobCard;
