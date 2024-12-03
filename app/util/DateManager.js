/**
 * DateManager is used to get formated date like this 03/12/2024 dd/mm/yy
 * @param {Date} selectedDate The current selected date
 * it provide some method like getTodaysDate
 */
class DateManager {
  constructor() {
    this.today = new Date();
  }
  getTodaysDate(date) {
    let dateObject = date ? new Date(date) : new Date();

    return `${dateObject.getFullYear()}-${
      dateObject.getMonth() + 1
    }-${dateObject.getDate()}`;
  }
  getDateAfterMonth(date = 6) {
    const totalMonth = this.today.getMonth() + 1 + date;
    const extraYear = (totalMonth / 12).toString().split(".");

    const todayDate = this.today.getDate();

    const year = this.today.getFullYear() + +extraYear[0];

    const month = Math.floor(+`.${extraYear[1]}` * 12) || 1;

    return `${year}-${month}-${todayDate}`;
  }
}

export default DateManager;
