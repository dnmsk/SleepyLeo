function toFixed2Digits(int) {
  return int > 9 ? int : '0' + int;
}

function monthString(val) {
  switch(val) {
    case 0:
      return 'января';
    case 1:
      return 'февраля';
    case 2:
      return 'марта';
    case 3:
      return 'апреля';
    case 4:
      return 'мая';
    case 5:
      return 'июня';
    case 6:
      return 'июля';
    case 7:
      return 'августа';
    case 8:
      return 'сентября';
    case 9:
      return 'октября';
    case 10:
      return 'ноября';
    case 11:
      return 'декабря';
  }
};

export function parseInCurrentTZ(stringDate) {
  var b = stringDate.split(/\D/);
  return new Date(b[0], b[1]-1, b[2], b[3], b[4], b[5]);
}

export function numberToHourMin(num) {
  let hour = Math.floor(num);
  let min = Math.floor(60 * (num - hour));
  if (hour == 0) {
    return min + ' мин';
  }
  if (min == 0) {
    return hour + ' ч';
  }
  return hour + ' ч ' + min + ' мин';
};

export function isToday(date) {
  date = new Date(date);
  var now = new Date();
  return now.getYear() == date.getYear() && now.getMonth() == date.getMonth() && now.getDate() == date.getDate();
};

export function toDateString(date, mode) {
  date = new Date(date);
  var now = new Date();
  var dateString = date.getDate()  + ' ' +  monthString(date.getMonth());
  if (now.getFullYear() != date.getFullYear() || mode == 'year') {
    dateString += ' ' + date.getFullYear();
  }
  return dateString;
};

export function toTimeString(date, mode) {
  date = new Date(date);
  var timeString = toFixed2Digits(date.getHours());
  if (mode == 'hours') {
    return timeString;
  }
  timeString += ':' + toFixed2Digits(date.getMinutes());
  if (mode == 'minutes') {
    return timeString;
  }
  return timeString + ':' + toFixed2Digits(date.getSeconds());
};

export function toUTCTimeString(date, mode) {
  date = new Date(date);
  var timeString = toFixed2Digits(date.getUTCHours());
  if (mode == 'hours') {
    return timeString;
  }
  timeString += ':' + toFixed2Digits(date.getUTCMinutes());
  if (mode == 'minutes') {
    return timeString;
  }
  return timeString + ':' + toFixed2Digits(date.getUTCSeconds());
};
