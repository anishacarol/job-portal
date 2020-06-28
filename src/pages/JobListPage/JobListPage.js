import React, { useEffect, useRef, useState } from "react";
import JobCard from "../../components/JobCard/JobCard";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import { getFilterJobList } from "../../helper/getFilterJobList";
import { getJobListData } from "../../helper/getFormattedJobList";
import getUrl from "../../helper/getUrl";
import useFetch from "../../hooks/useFetch";

let jobListData = null;

const JobListPage = () => {
  const [jobList, setJobList] = useState(null);
  const { loading, error, data } = useFetch(getUrl().list);
  const filter = useRef({});

  const onChangeHandler = e => {
    const { name, value } = e.target;
    if (value !== 0) {
      filter.current[name] = value;
    }
    console.log(filter.current);

    const result = getFilterJobList(jobListData.joblist, filter.current);
    setJobList(result);
  };

  useEffect(() => {
    if (data) {
      jobListData = getJobListData(data.content);
      data && setJobList(jobListData.joblist);
    }
  }, [data]);

  if (error) {
    return <h1>Error</h1>;
  }

  if (loading || !data || !jobList) {
    return <h1>Spinner</h1>;
  }

  return (
    <>
      <Dropdown
        name="country"
        arr={jobListData.countries}
        onChangeHandler={onChangeHandler}
      />
      <Dropdown
        name="department"
        arr={jobListData.departments}
        onChangeHandler={onChangeHandler}
      />
      {jobList.map(({ id, companyName, position, country, employmentType }) => (
        <JobCard
          key={id}
          companyName={companyName}
          position={position}
          id={id}
          location={country}
          typeOfEmployment={employmentType}
        />
      ))}
    </>
  );
};

export default JobListPage;
