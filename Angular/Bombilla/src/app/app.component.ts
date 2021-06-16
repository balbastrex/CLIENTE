import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { LightBulbComponent } from './light-bulb/light-bulb.component';
import { logService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'routing-test';
  
  constructor(private logger: logService){
    logger.info('This is being traced from the injected service');
  }

  @ViewChild('bulb') bulb:LightBulbComponent = new LightBulbComponent();

  switchOn = () => {
    this.bulb.switchOn();
  }

  switchOff = () => {
    this.bulb.switchOff();
  }

  ngAfterViewInit(): void {
    this.bulb.switchOn();
  }
}

