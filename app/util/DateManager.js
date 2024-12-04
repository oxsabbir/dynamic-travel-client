/**
 * DateManager is used to get formated date like this 03/12/2024 dd/mm/yy
 * @param {Date} selectedDate The current selected date
 * it provide some method like getTodaysDate
 */
class DateManager {
  constructor(selectedDate) {
    this.today = new Date();
    this.selectedDate = selectedDate;
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

  getSelectedDate() {
    return this.getTodaysDate(new Date(this.selectedDate));
  }
  getDaysLeft(startDate) {
    const bookDate = new Date(startDate);
    const today = this.today;

    const laterDate = bookDate > today ? bookDate : today;
    const earlierDate = bookDate > today ? today : bookDate;

    let yearsDifference = laterDate.getFullYear() - earlierDate.getFullYear();
    let monthsDifference = laterDate.getMonth() - earlierDate.getMonth();
    let daysDifference = laterDate.getDate() - earlierDate.getDate();

    if (daysDifference < 0) {
      monthsDifference -= 1;
      const previousMonth = new Date(
        laterDate.getFullYear(),
        laterDate.getMonth(),
        0
      );
      daysDifference += previousMonth.getDate();
    }

    if (monthsDifference < 0) {
      yearsDifference -= 1;
      monthsDifference += 12;
    }

    let mainDate = {
      daysString: ``,
      dateFormat: bookDate.toString().split(" ").slice(0, 4).join(" "),
    };

    if (!yearsDifference && !monthsDifference && daysDifference > 0) {
      mainDate.daysString = `${daysDifference} Days left`;
    } else if (!yearsDifference && !daysDifference && monthsDifference > 0) {
      mainDate.daysString = `${monthsDifference} Month left`;
    } else if (!yearsDifference && daysDifference > 0 && monthsDifference > 0) {
      mainDate.daysString = `${monthsDifference} Month and ${daysDifference} days left`;
    } else {
      mainDate.daysString = `${yearsDifference} year, ${monthsDifference} month and ${daysDifference} days left`;
    }

    return mainDate;
  }
}

export default DateManager;
