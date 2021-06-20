import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SystemComponent} from './system.component';
import {SystemRoutingModule} from './system-routing.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';
import { SelfDiagnosticsComponent } from './self-diagnostics/self-diagnostics.component';
import { MainComponent } from './main/main.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RegisterComponent } from './register/register.component';
import { RecordingModule } from './recording/recording.module';
import {OnkoriskComponent} from './onkorisk/onkorisk.component';
import { SpecializedQuestionnaireComponent } from './specialized-questionnaire/specialized-questionnaire.component';
import { GeneralTestComponent } from './general-test/general-test.component';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    RecordingModule
  ],

  declarations: [
    SystemComponent,
    HeaderComponent,
    FooterComponent,
    DoctorsComponent,
    DiagnosticsComponent,
    SelfDiagnosticsComponent,
    MainComponent,
    DoctorComponent,
    RegisterComponent,
    OnkoriskComponent,
    SpecializedQuestionnaireComponent,
    GeneralTestComponent
  ],
  providers: []
})
export class SystemModule { }
