import { Injectable } from '@angular/core';
import data from '../../data.json';
import { User } from '../interfaces/user-interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData(): Promise<User[]> {
    return new Promise((resolve) => {
      setTimeout(function () {
        return resolve(data);
      }, 300);
    });
  }
}
