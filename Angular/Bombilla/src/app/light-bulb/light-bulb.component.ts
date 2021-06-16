import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-bulb',
  templateUrl: './light-bulb.component.html',
  styleUrls: ['./light-bulb.component.css']
})
export class LightBulbComponent implements OnInit {

  isOn:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  switchOn = () => {
    this.isOn = true;
  }
  
  switchOff = () => {
    this.isOn = false;
  }

}
