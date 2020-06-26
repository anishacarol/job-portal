import React from "react";
import JobCard from "../../components/JobCard/JobCard";
import getUrl from "../../helper/getUrl";
import useFetch from "../../hooks/useFetch";

const JobListPage = () => {
  const { loading, error, data } = useFetch(getUrl().list);

  if (error) {
    return <h1>Error</h1>;
  }

  if (loading || !data) {
    return <h1>Spinner</h1>;
  }

  return (
    <>
      {data.content.map(({ id, name, company: { name: companyName } }) => (
        <JobCard companyName={companyName} position={name} id={id} />
      ))}
    </>
  );
};

export default JobListPage;
