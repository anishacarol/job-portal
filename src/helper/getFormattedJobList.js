import { getCustomFieldByKey } from "./getCustomFieldByKey";

export const getJobListData = arr => {
  const countries = {};
  const departments = {};

  const joblist = arr.map(item => {
    const country = getCustomFieldByKey(item.customField, "COUNTRY");
    countries[country] = country;
    departments[item.department.label] = item.department.label;

    return {
      id: item.id,
      position: item.name,
      companyName: item.company.name,
      country: country,
      city: item.location.city,
      department: item.department.label,
      employmentType: item.typeOfEmployment.label
    };
  });

  return {
    joblist,
    countries: Object.values(countries),
    departments: Object.values(departments)
  };
};
