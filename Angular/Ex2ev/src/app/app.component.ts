import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { EXButtonComponent } from './exbutton/exbutton.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  
  @ViewChild ('exButton') button: EXButtonComponent = new EXButtonComponent;

  h2Title: string = 'Welcome to Web Development!';

  ngOnInit(): void {
    // this.title = 'Welcome to Web Development!';
  }

  ngAfterViewInit(): void{
    this.h2Title = 'Already in!';
    console.log('Change for exercise 3, done');

    this.button.justDoIt();
  }



  
}
