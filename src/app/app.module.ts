import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormByTeacherComponent } from './form-by-teacher/form-by-teacher.component';
import { FormAfterClassComponent } from './form-after-class/form-after-class.component';

@NgModule({
  declarations: [
    AppComponent,
    FormByTeacherComponent,
    FormAfterClassComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
