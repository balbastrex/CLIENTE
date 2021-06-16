import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-second-view',
  templateUrl: './second-view.component.html',
  styleUrls: ['./second-view.component.css']
})
export class SecondViewComponent implements OnInit {

  name: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    this.route.queryParams.subscribe(params => {
      console.table(params);    
      this.name = params['name'];
    } )
  }

}
