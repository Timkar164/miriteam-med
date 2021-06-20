import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {RecordingComponent} from './recording.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {QuestioningComponent} from './questioning/questioning.component';
import {RecordingRoutingModule} from './recording-routing.module';
import {TypeVisitComponent} from './type-visit/type-visit.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RecordingRoutingModule

  ],
  declarations: [
   RecordingComponent,
    AppointmentComponent,
    QuestioningComponent,
    TypeVisitComponent
  ]
})

export class RecordingModule { }
