import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  ngAfterViewInit(): void {

    const act3h2 = 'Welcome to Web developement';
    
    console.log('Change for exercise 3, done!');
  }

  title = 'examen2Ev';



}

