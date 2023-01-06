import { Component } from '@angular/core';
import { AppConfigService } from 'src/services/appConfigService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private appConfig: AppConfigService){
    console.log(appConfig.base_url);
  }
 
  title = 'angular-app';
}
