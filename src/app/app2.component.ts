import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root2',
  templateUrl: './app2.component.html'
})
export class App2Component {
  title = "ng-sample";
  message = ''

  constructor(private appService: AppService) {

  }

  onClick(): void {
    this.appService.get().subscribe(data => {
      this.message = data.memo;
    });
  }
}
