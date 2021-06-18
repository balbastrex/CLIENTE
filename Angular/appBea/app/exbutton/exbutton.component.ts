import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JustDoltComponent } from '../just-dolt/just-dolt.component';

@Component({
  selector: 'app-exbutton',
  templateUrl: './exbutton.component.html',
  styleUrls: ['./exbutton.component.css']
})
export class EXButtonComponent implements OnInit, JustDoltComponent {
 @Input()label='';
 
  constructor(){}

  ngOnInit(){}

  justDolt(){
    console.info('justDolt:Exercise 5 done!');
  }
  callMe(){
   this.label='“Here button. I called you!”';
  }
}

  

