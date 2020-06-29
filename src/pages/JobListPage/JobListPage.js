import React, { useEffect, useRef, useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import { getFilterJobList } from "../../helper/getFilterJobList";
import { getJobListData } from "../../helper/getFormattedJobList";
import getUrl from "../../helper/getUrl";
import useFetch from "../../hooks/useFetch";
import * as Styled from "./JobListPage.styles";

const JobListPage = () => {
  const [jobList, setJobList] = useState(null);
  const { loading, error, data } = useFetch(getUrl().list);
  const filter = useRef({});
  const jobListData = useRef(null);

  const onChangeHandler = e => {
    const { name, value } = e.target;
    if (value === "all") {
      delete filter.current[name];
    } else {
      filter.current[name] = value;
    }
    const result = getFilterJobList(
      jobListData.current.joblist,
      filter.current
    );
    setJobList(result);
  };

  useEffect(() => {
    if (data) {
      jobListData.current = getJobListData(data.content);
      data && setJobList(jobListData.current.joblist);
    }
  }, [data]);

  if (error) {
    return <h1>Error</h1>;
  }

  if (loading || !data || !jobList) {
    return <h1>Spinner</h1>;
  }

  const jobListElements = jobList.map(
    ({ id, companyName, position, country, employmentType }) => (
      <JobCard
        key={id}
        companyName={companyName}
        position={position}
        id={id}
        location={country}
        typeOfEmployment={employmentType}
      />
    )
  );

  return (
    <>
      <Styled.FilterWrapper>
        <Styled.Filters>
          <label>Filter By</label>
          <Dropdown
            name="country"
            arr={jobListData.current.countries}
            onChangeHandler={onChangeHandler}
            defaultText="All countries"
          />
          <Dropdown
            name="department"
            arr={jobListData.current.departments}
            onChangeHandler={onChangeHandler}
            defaultText="All departments"
          />
        </Styled.Filters>
        <Styled.FiltersResultCount>
          <label>
            Total jobs: <span>{jobList.length}</span>
          </label>
        </Styled.FiltersResultCount>
      </Styled.FilterWrapper>
      {jobList.length === 0 ? (
        <h1>No Jobs available for the selected filters</h1>
      ) : (
        <>{jobListElements}</>
      )}
    </>
  );
};

export default JobListPage;
