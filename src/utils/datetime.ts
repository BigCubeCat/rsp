function normilizeDate(value: number): string {
  if (value < 10) {
    return "0" + value;
  }
  return "" + value;
}

function getDate(date: Date) {
  return normilizeDate(date.getDay()) + "."
    + normilizeDate(date.getMonth() + 1) + "."
    + date.getFullYear();
}

function getTime(date: Date) {
  return normilizeDate(date.getHours()) + "." + normilizeDate(date.getMinutes());
}

export { getTime, getDate };

