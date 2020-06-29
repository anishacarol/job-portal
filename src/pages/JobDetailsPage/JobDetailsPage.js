import React from "react";
import { useParams } from "react-router-dom";
import JobDetails from "../../components/JobDetails/JobDetails";
import getUrl from "../../helper/getUrl";
import useFetch from "../../hooks/useFetch";

const JobDetailsPage = () => {
  let { id } = useParams();
  const { loading, error, data } = useFetch(getUrl(id).details);
  console.log(":::::", data);
  if (error) {
    return <h1>Error</h1>;
  }

  if (loading || !data) {
    return <h1>Spinner</h1>;
  }

  return <JobDetails data={data} />;
};

export default JobDetailsPage;
