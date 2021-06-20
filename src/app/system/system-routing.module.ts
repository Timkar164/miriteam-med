import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemComponent} from './system.component';
import {SelfDiagnosticsComponent} from './self-diagnostics/self-diagnostics.component';
import {RecordingComponent} from './recording/recording.component';
import {DiagnosticsComponent} from './diagnostics/diagnostics.component';
import {DoctorsComponent} from './doctors/doctors.component';
import {MainComponent} from './main/main.component';
import {DoctorComponent} from './doctor/doctor.component';
import { RegisterComponent } from './register/register.component';
import { TypeVisitComponent } from './recording/type-visit/type-visit.component';
import { QuestioningComponent } from './recording/questioning/questioning.component';
import { AppointmentComponent } from './recording/appointment/appointment.component';
import {OnkoriskComponent} from './onkorisk/onkorisk.component';
import {SpecializedQuestionnaireComponent} from './specialized-questionnaire/specialized-questionnaire.component';
import {GeneralTestComponent} from './general-test/general-test.component';


const routes: Routes = [
  { path: '', component: SystemComponent, children: [
      {path: 'self-diagnostics', component: SelfDiagnosticsComponent},
      { path: 'recording', component: RecordingComponent, children: [
          {path: 'type-visit', component: TypeVisitComponent},
          {path: 'questioning', component: QuestioningComponent},
          {path: 'appointment', component: AppointmentComponent},
        ]},
      {path: 'diagnostics', component: DiagnosticsComponent},
      {path: 'doctors', component: DoctorsComponent},
      {path: 'main', component: MainComponent},
      {path: 'doctor', component: DoctorComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'onkorisk', component: OnkoriskComponent},
      {path: 'specialized-questionnaire', component: SpecializedQuestionnaireComponent },
      {path: 'general-test', component: GeneralTestComponent},
    ]} ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule { }
