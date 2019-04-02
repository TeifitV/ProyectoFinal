import constants from './Constants';

export default class Helper{

  formatDate(date, renderHoursAndMinutes = false){
    let hoursAndMinutesString = '';
    const targetDate = new Date(date),
          month = constants.months[targetDate.getMonth()],
          day = targetDate.getDate(),
          year = targetDate.getFullYear();

          if(renderHoursAndMinutes){
            const hours = targetDate.getHours(),
                  minutes = targetDate.getMinutes()
                  ampm = hours < 12 ? 'a.m.' : 'p.m.';
            hoursAndMinutesString = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`
          }

    return `${day} ${"\n"} ${month} `;
  }

}
