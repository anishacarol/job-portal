export const getCustomFieldByKey = (fieldArr, fieldId) => {
  return fieldArr.find(item => item.fieldId === fieldId).valueLabel;
};
