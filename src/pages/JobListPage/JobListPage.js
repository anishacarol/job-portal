import React, { useEffect, useState } from "react";
import Error from "../../components/Error/Error";
import JobCard from "../../components/JobCard/JobCard";
import Pagination from "../../components/Pagination";
import Spinner from "../../components/Spinner/Spinner";
import Dropdown from "../../components/UI/Dropdown/Dropdown";
import { getFilterJobList } from "../../helper/getFilterJobList";
import { getJobListData } from "../../helper/getFormattedJobList";
import getUrl from "../../helper/getUrl";
import useFetch from "../../hooks/useFetch";
import useQuery from "../../hooks/useQuery";
import * as Styled from "./JobListPage.styles";

const filter = {};
let data = null;

const JobListPage = () => {
  const query = useQuery();
  const currentPage = query.get("page") || 0;
  const [jobList, setJobList] = useState(null);
  const { loading, error, data: APIResponse } = useFetch(
    `${getUrl().list}?offset=${currentPage}`
  );

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
      setJobList(data.joblist);
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
          <br />
        </Styled.FiltersResultCount>
      </Styled.FilterWrapper>
      <div>
        <Pagination
          currentPage={APIResponse.offset}
          totalPages={+APIResponse.totalFound - 1}
        />
        <Styled.FiltersResultCount>
          <br />
          <label>
            Current page: <span>{APIResponse.offset}</span>
          </label>
        </Styled.FiltersResultCount>
      </div>
      {jobList.length === 0 ? (
        <h1 data-testid="no-data">
          No Jobs available for the selected filters
        </h1>
      ) : (
        <>{jobListElements}</>
      )}
    </>
  );
};

export default JobListPage;
