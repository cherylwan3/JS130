/**
 * P:
 * - Create a clock that is independent of date.
 * - dd minutes to and subtract minutes 
 * - just use arithmetic operations.
 * - two clock objects that represent the same time should be equal to each other.
 * 
 * E:
 * Clock.at(8).toString()).toBe('08:00')
 * Clock.at(11, 9).toString()).toBe('11:09');
 * 
 * let clock = Clock.at(23, 30).add(60);
  expect(clock.toString()).toBe('00:30');

  let clock = Clock.at(10).add(3061);
   expect(clock.toString()).toBe('13:01');

    let clock = Clock.at(0, 30).subtract(60);
    expect(clock.toString()).toEqual('23:30');
 * D:
- hh: mm
  - hh = 01 to 24
  - mm = 00 to 60

 * A:
 * 
 * static totalMinutes = 0;
 * static total_min_in_day = 1440;
 * 
 * static at(num1, num2(optional)) => - returns time object 
 *  set totalMinutes = hr * 60 + minutes 
 *  if totalMinutes is negative, add total_min_in_day to totalMinutes 
 * - set total to totalMinutes % total_min_in_day
 * - get hours by Math.floor(total / 60)
 * - get minutes by total % 60
 * - return {hr: hours, min: minutes}

 * 
 * static toString (timeObj)=> returns string representing time
 * - if string version of timeObj.hr has 1 digit, append 0 in front of string
 * - if string version of timeObj.min has 1 digit, append 0 in front of string 
 * 
 * static add(minutes)
 *  set totalMin to totalMin + min
 * 
 * static subtract(minutes)
 *  set totalMin to totalMin - min
*/


class Clock {
  static ONE_DAY = 24 * 60;

  constructor (hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }
  
  static at(hours, minutes = 0) {
    return new Clock(hours, minutes);
  }

  add(minutes) {
    this.minutes += minutes;
    this._calculateTime();

    return this;
  }

  subtract(minutes) {
    this.minutes -= minutes;
    this._calculateTime();

    return this;
  }

  isEqual(otherTime) {
    return this.hours === otherTime.hours && this.minutes === otherTime.minutes;
  }

  toString() {
    let hr = String(this.hours).length === 2 ? `${this.hours}` : `0${this.hours}`;
     console.log(hr);
    let min = String(this.minutes).length === 2 ? `${this.minutes}` : `0${this.minutes}`;
    return `${hr}:${min}`;
  }


  _totalMinutes() {
    let totalMinutes = (this.hours * 60) + this.minutes;
    while (totalMinutes < 0) {
      totalMinutes += Clock.ONE_DAY;
    }
    totalMinutes = totalMinutes % Clock.ONE_DAY;

    return totalMinutes;
  }

  _calculateTime() {
    let totalMinutes = this._totalMinutes();
    this.hours = Math.floor(totalMinutes / 60);
    this.minutes = totalMinutes % 60;
  }
}

module.exports = Clock;
