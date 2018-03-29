import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sample Angular Project';
  title2 = 'Title 2 .....';
  //development code can go into this block
  isAuthenticated :boolean;
  dynamicString : string;

  onclickchange(){
    this.isAuthenticated = false;
    this.dynamicString = "Hey Clicked!!!";
  }
}
