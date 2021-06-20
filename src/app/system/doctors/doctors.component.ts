import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss'],
})
export class DoctorsComponent implements OnInit {
  constructor() {}
  dropdown_flag = false;
  ngOnInit(): void {
  }

  openSpecialization(){
    if(this.dropdown_flag === false){
      this.dropdown_flag = true;
    }
    else{
      this.dropdown_flag = false;
    }
  }
}
