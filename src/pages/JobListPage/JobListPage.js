import React from "react";
import JobCard from "../../components/JobCard/JobCard";
import useFetch from "../../hooks/useFetch";

const JobListPage = () => {
  const { loading, error, data } = useFetch(
    "https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings"
  );

  if (error) {
    return <h1>Error</h1>;
  }

  if (loading || !data) {
    return <h1>Spinner</h1>;
  }

  return (
    <>
      {data.content.map((item, index) => (
        <JobCard companyName={item.company.name} position={item.name} />
      ))}
    </>
  );
};

export default JobListPage;
