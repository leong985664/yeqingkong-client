const getYearSpanString = (startString, endString, replaceNullEndWithCurrent = false) => {
    const start = new Date(startString);
    if (!endString) {
      return replaceNullEndWithCurrent ? `${start.getFullYear()} - current` : start.getFullYear();
    }
    const end = new Date(endString);
    return `${start.getFullYear()} - ${end.getFullYear()}`;
  };

const getYear = (dateTimeString) => {
  if (!dateTimeString) {
    return null;
  }
  const dateTime = new Date(dateTimeString);
  return dateTime.getFullYear();
};

const getMonthYear = (dateTimeString) => {
  if (!dateTimeString) {
    return null;
  }
  const dateTime = new Date(dateTimeString);
  return dateTime.toLocaleString('default', {month:'short', year:'numeric'})
}

export { getYearSpanString, getYear, getMonthYear };
  