import React, { useEffect, useState } from "react";
import Error from "../../components/Error/Error";
import JobCard from "../../components/JobCard/JobCard";
import Spinner from "../../components/Spinner/Spinner";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import { getFilterJobList } from "../../helper/getFilterJobList";
import { getJobListData } from "../../helper/getFormattedJobList";
import getUrl from "../../helper/getUrl";
import useFetch from "../../hooks/useFetch";
import * as Styled from "./JobListPage.styles";

const filter = {};
let data = null;

const JobListPage = () => {
  const [jobList, setJobList] = useState(null);
  const { loading, error, data: APIResponse } = useFetch(getUrl().list);

  const onChangeHandler = e => {
    const { name, value } = e.target;

    if (value === "all") {
      delete filter[name];
    } else {
      filter[name] = value;
    }

    const result = getFilterJobList(data.joblist, filter);
    setJobList(result);
  };

  useEffect(() => {
    if (APIResponse) {
      data = getJobListData(APIResponse.content);
      APIResponse && setJobList(data.joblist);
    }
  }, [APIResponse]);

  if (error) {
    return <Error />;
  }

  if (loading || !APIResponse || !jobList) {
    return <Spinner />;
  }

  const jobListElements = jobList.map(
    ({ id, companyName, position, country, city, employmentType }, index) => (
      <JobCard
        key={`${id}-${index}`}
        companyName={companyName}
        position={position}
        id={id}
        city={city}
        country={country}
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
            arr={data.countries}
            onChangeHandler={onChangeHandler}
            defaultText="All countries"
          />
          <Dropdown
            name="department"
            arr={data.departments}
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
