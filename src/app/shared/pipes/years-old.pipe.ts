import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearsOld',
})
export class YearsOldPipe implements PipeTransform {
  transform(value: string) {
    let birthDateInMs = new Date(value).getTime();
    let currentDateInMs = Date.now();

    let msPerMinutes = 60 * 1000;
    let msPerHour = msPerMinutes * 60;
    let msPerDay = msPerHour * 24;
    let msPerWeek = msPerDay * 7;
    let msPerMonth = msPerWeek * 4;
    let msPerYear = msPerMonth * 12;

    let timeGap = currentDateInMs - birthDateInMs;

    if (timeGap < msPerMinutes) {
      return Math.round(timeGap / 1000) + ' seconds old';
    } else if (timeGap < msPerHour) {
      return Math.round(timeGap / msPerMinutes) + ' minutes old';
    } else if (timeGap < msPerDay) {
      return Math.round(timeGap / msPerHour) + ' hours old';
    } else if (timeGap < msPerWeek) {
      return Math.round(timeGap / msPerDay) + ' days old';
    } else if (timeGap < msPerMonth) {
      return Math.round(timeGap / msPerWeek) + ' weeks old';
    } else if (timeGap < msPerYear) {
      return Math.round(timeGap / msPerMonth) + ' months old';
    } else {
      return Math.round(timeGap / msPerYear) + ' years old';
    }
  }
}
