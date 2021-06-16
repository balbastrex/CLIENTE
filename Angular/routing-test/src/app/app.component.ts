import { AfterViewInit, Component} from '@angular/core';
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
  
  ngAfterViewInit(): void {
    
  }
}

