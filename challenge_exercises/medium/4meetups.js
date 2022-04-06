/**
 * P:
 * - days of week: 'Monday', 'Tuesday', 'Wednesday', 
 * 'Thursday', 'Friday', 'Saturday', and 'Sunday'
 * - the descriptors that may be given are strings: 'first', 'second', 
 * 'third', 'fourth', 'fifth', 'last', and 'teenth'
 * - case doesn't matter
 * 
 * D:
 * 
 * dayObj:
 *  key: 0 to 6 (0 is sunday, 6 is saturday)
 *  value: day of week 
 * 
 * array of schedule:
 * 
 * scheduleObj: 
 * schedule: date
 * 
 * 
 * A:
 * constructor(year, month)
 *  - save year and month
 *  - determine last day of month
 *     - pass 0 to Date constructor 
 *        - represents last day of month prior to indicated year/month
 *        
 * day method(dayOfWeek, schedule)
 *    - get the dayNum matching dayOfWeek
 * 
 * - determine the first possible day of meetup (firstDate === 1)
 *  - getDate of first day of month
 *  - until getDay of date matches dayNum, increase firstDay by 1 
 * 
 * - determine rest of schedule (schedule)
 *   - set date to firstDate
 *   - add the correct number of plus date
 *      - if schedule is first, date = firstDay
 *      - if schedule is last,
 *          determine whether adding fifth to firstDay is > daysInMonth
 *          - if yes, last day is firstDay + fourth # days
 * 
 * - determine last day
 *  - set scheduleArr.last to same as scheduleArr.fourth or fifth
 *  
 * - determine teenth day
 *  - set date to 13th date
 *  - add 1 to date until getDay matches dayNum
 *  -  
*/

"use strict";

const DayOfWeek = {
  sunday: 0,
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
}

Object.freeze(DayOfWeek);

class Meetup {
  static NoMeetup = 'There is no meet up at this date.';
  static AddDays = {
    second: 7,
    third: 14,
    fourth: 21,
    fifth: 28,
  }

  constructor(year, month) {
    this.year = year;
    this.month = month - 1;
    this.daysInMonth = new Date(year, month, 0).getDate();
  }

  day(dayOfWeek, schedule) {
    dayOfWeek = dayOfWeek.toLowerCase();
    schedule = schedule.toLowerCase();

    let weekday = DayOfWeek[dayOfWeek];
    let firstDay = this.getFirst(weekday);
    
    let date = firstDay; 
    switch(schedule) {
    case 'first':
      date = firstDay;
      break;
    case 'second':
      date += Meetup.AddDays[schedule];
      break;
    case 'third':
      date += Meetup.AddDays[schedule];
      break;
    case 'fourth':
      date += Meetup.AddDays[schedule];
      break;
    case 'fifth':
      date = this.getFifth(firstDay);
      break;
    case 'teenth': 
      date = this.getTeenth(weekday);
      break;
    case 'last':
      let possibleFifth = this.getFifth(firstDay);
      date = (possibleFifth ? possibleFifth : (date + Meetup.AddDays['fourth']));
      break;
    default:
      date = null;
      break;
    }
  
    return date ? new Date(this.year, this.month, date) : null;
  }

  getFirst(weekday) {
    let firstDate = 0;
    let dayOfWeek;
    do {
      firstDate += 1;
      dayOfWeek = new Date(this.year, this.month, firstDate).getDay();
    } while (dayOfWeek !== weekday);

    return firstDate;
  }

  getFifth(firstDay) {
    let possibleFifth = firstDay + Meetup.AddDays['fifth'];
    return possibleFifth <= this.daysInMonth ? possibleFifth : null;
  }

  getTeenth(weekday) {
    let possibleFirstDay = 13;

    for (let date = possibleFirstDay; date + 6; date += 1) {
      let day = new Date(this.year, this.month, date).getDay();
      if (day === weekday) return date;
    }
  }

}

module.exports = Meetup;