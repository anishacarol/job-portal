import React from "react";
import { Link } from "react-router-dom";
import Icon from "../UI/Icon/Icon";
import * as Styled from "./JobDetails.styles";

const JobDetails = () => {
  return (
    <Styled.JobDetails>
      <Styled.LinkHolder>
        <Link to="job-list">Back to list</Link>
      </Styled.LinkHolder>
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
      <Styled.LinkHolder></Styled.LinkHolder>
      <Styled.Detail>
        what we need: what we need: what we need: what we need: what we need:
        what we need:{" "}
      </Styled.Detail>
    </Styled.JobDetails>
  );
};

export default JobDetails;
