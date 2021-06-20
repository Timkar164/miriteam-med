import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-self-diagnostics',
  templateUrl: './self-diagnostics.component.html',
  styleUrls: ['./self-diagnostics.component.scss']
})
export class SelfDiagnosticsComponent implements OnInit {

  analyzesList_isOpen: boolean;
  symptomsList_isOpen: boolean;
  constructor() { }

  ngOnInit(): void {
    this.analyzesList_isOpen = false;
    this.symptomsList_isOpen = true;
  }

  openCity( cityName: string) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
  }

  // tslint:disable-next-line:typedef
  openSymptoms(): void{
    if (this.symptomsList_isOpen === false){
      this.symptomsList_isOpen = true;
    }
    else{
      this.symptomsList_isOpen = false;
    }
  }
  openAnalyzes(): void{
    if (this.analyzesList_isOpen === false){
      this.analyzesList_isOpen = true;
    }
    else{
      this.analyzesList_isOpen = false;
    }
  }
}
