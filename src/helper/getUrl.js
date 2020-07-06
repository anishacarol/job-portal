const baseUrl = "https://api.smartrecruiters.com/v1/companies/visa/postings";

const getUrl = id => ({
  list: baseUrl,
  details: `${baseUrl}/${id}`
});

export default getUrl;
