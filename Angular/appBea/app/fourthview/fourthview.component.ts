import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourthview',
  templateUrl: './fourthview.component.html',
  styleUrls: ['./fourthview.component.css']
})
export class FourthviewComponent implements OnInit, AfterViewInit{
  title = 'Welcome to Web Development!';

  ngOnInit():void{
    console.log('OnInit:', this.title);
    this.title='Already in!';
  }

  ngAfterViewInit(): void{
    console.info('Change for exercise 3, done');
  }

}
