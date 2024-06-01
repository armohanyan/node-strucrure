export default class DateFormat {
  static convert(data) {
    const date = new Date(data);
    return `${date.getFullYear()}-${(date.getMonth() + 1).length !== 2
      ? `${date.getMonth() + 1}`
      : (date.getMonth() + 1)}-${date.getDate().length !== 2
      ? `${date.getDate()}` : date.getDate()}`;
  }
}
