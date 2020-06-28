export const getJobListData = arr => {
  const getCustomFiledByKey = (fieldArr, fieldId) => {
    return fieldArr.find(item => item.fieldId === fieldId).valueLabel;
  };

  const countries = {};
  const departments = {};

  const joblist = arr.map(item => {
    const country = getCustomFiledByKey(item.customField, "COUNTRY");
    countries[country] = country;
    departments[item.department.label] = item.department.label;

    return {
      id: item.id,
      position: item.name,
      companyName: item.company.name,
      country: country,
      department: item.department.label,
      employementType: item.typeOfEmployment.label
    };
  });

  return {
    joblist,
    countries: Object.values(countries),
    departments: Object.values(departments)
  };
};
