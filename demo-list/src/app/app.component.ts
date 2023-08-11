import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'original demo-list';

  constructor() {
    // setTimeout(() => {
    //   alert(this.title);
    //   if (this.title == 'original demo-list') {
    //     this.title = 'updated demo-list'
    //   } else {
    //     this.title = 'original demo-list';
    //   }
      
    // }, 2000);
  }

  activateMenu(obj:string) {

  }
}
