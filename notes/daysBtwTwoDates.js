const daysBetweenDates = (date1, date2) => {
  const [a, b] = [date1, date2].map(date => new Date(date).getTime());
  return Math.round(Math.abs(a - b) / (1000 * 60 * 60 * 24));
};



console.log(daysBetweenDates("2021-10-06", "2022-01-11"));
