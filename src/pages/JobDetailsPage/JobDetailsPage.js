import React from "react";
import { useParams } from "react-router-dom";
import Error from "../../components/Error/Error";
import JobDetails from "../../components/JobDetails/JobDetails";
import Spinner from "../../components/Spinner/Spinner";
import getUrl from "../../helper/getUrl";
import useFetch from "../../hooks/useFetch";

const JobDetailsPage = () => {
  let { id } = useParams();
  const { loading, error, data } = useFetch(getUrl(id).details);

  if (error) {
    return <Error />;
  }

  if (loading || !data) {
    return <Spinner />;
  }

  return <JobDetails data={data} />;
};

export default JobDetailsPage;
