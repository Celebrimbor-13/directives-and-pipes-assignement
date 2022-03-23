import { Component } from '@angular/core';
import { User } from './interfaces/user-interface';
import { DataService } from './services/data.service';
import { Color, Status } from './models/colors-statuses';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loading = false;
  data!: User[];
  color = Color;
  status = Status;
  constructor(private dataService: DataService) {}

  dataLoader() {
    this.loading = true;
    this.dataService.getData().then((value) => {
      this.data = value;
      this.loading = false;
    });
  }
}
