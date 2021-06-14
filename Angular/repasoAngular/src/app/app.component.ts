import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  title = 'repasoAngular';
  userImput = 'texto inicial';
  
  constructor() {
    console.log('Desde el constructor');
  }
  
  ngOnInit(): void {
    console.log('Desde el ngOnInit');
  }  
  
  ngAfterViewInit(): void {
    console.log('Desde el AfterViwewInit')
  }

  handleUserImput = (event: any) => {
    console.log(event);
    this.userImput = event.currentTarget.value;
  } 
}
