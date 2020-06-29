import React from "react";
import { getCustomFieldByKey } from "../../helper/getCustomFieldByKey";
import Icon from "../UI/Icon/Icon";
import { ALink as Link } from "./../UI/Link/Link";
import * as Styled from "./JobDetails.styles";

const JobDetails = ({
  data: {
    name,
    location: { city },
    customField,
    typeOfEmployment: { label },
    company: { name: companyName },
    jobAd: {
      sections: {
        jobDescription: { title, text },
        qualifications: { title: qualificationTitle, text: qualificationText }
      }
    }
  }
}) => {
  return (
    <Styled.JobDetails>
      <Styled.LinkHolder>
        <Link to="/job-list">{`< Back to list`}</Link>
      </Styled.LinkHolder>
      <Styled.Company>{companyName}</Styled.Company>
      <Styled.JobTitle>{name}</Styled.JobTitle>
      <Styled.Information>
        <span>
          <Icon name="Location" />
          {`${city} , ${getCustomFieldByKey(customField, "COUNTRY")}`}
        </span>
        <span>
          <Icon name="Contract" />
          {label}
        </span>
      </Styled.Information>
      <Styled.Detail
        dangerouslySetInnerHTML={{
          __html: `${title} ${text} ${qualificationTitle} ${qualificationText}`
        }}
      ></Styled.Detail>
    </Styled.JobDetails>
  );
};

export default JobDetails;
