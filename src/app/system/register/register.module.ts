import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RegisterCodeComponent } from './register-code/register-code.component';
import { RegisterPhoneComponent } from './register-phone/register-phone.component';
import { RegisterComponent } from './register.component';


@NgModule({
  imports: [
    CommonModule,
  ],

  declarations: [
  RegisterCodeComponent,
  RegisterComponent,
  RegisterPhoneComponent],
  providers: []
})
export class SystemModule { }
