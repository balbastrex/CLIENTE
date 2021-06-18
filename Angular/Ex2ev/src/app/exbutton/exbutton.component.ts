import {AfterViewInit, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-exbutton',
  templateUrl: './exbutton.component.html',
  styleUrls: ['./exbutton.component.css']
})
export class EXButtonComponent implements OnInit, AfterViewInit{

  @Input() label: string = 'Click me!';

  justDoIt = () => {
    console.log('Exercise 5 done!')
  }

  ngOnInit(): void {

    // this.label = 'Listo para hacer clic';
  }

  ngAfterViewInit():void {
    // this.label = 'Listo para hacer clic';
  }

  labelChanger = () => {
    this.label = 'Listo para hacer clic';
    // console.log('button has been pressed');
  }
}
