import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserColorDirective } from './shared/directives/user-color.directive';
import { YearsOldPipe } from './shared/pipes/years-old.pipe';
import { BoxesComponent } from './boxes/boxes.component';
import { AlterColorDirective } from './shared/directives/alter-color.directive';

@NgModule({
  declarations: [AppComponent, UserColorDirective, YearsOldPipe, BoxesComponent, AlterColorDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
