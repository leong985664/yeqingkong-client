const getTimeSpanString = (startString, endString, replaceNullEndWithCurrent = false) => {
    const start = new Date(startString);
    if (!endString) {
      return replaceNullEndWithCurrent ? `${start.getFullYear()} - current` : start.getFullYear();
    }
    const end = new Date(endString);
    return `${start.getFullYear()} - ${end.getFullYear()}`;
  };

const getYearString = (dateTimeString) => {
  const dateTime = new Date(dateTimeString);
  return dateTime.getFullYear();
};
  
export { getTimeSpanString, getYearString };
  