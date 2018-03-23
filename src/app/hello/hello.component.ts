import { Component, OnInit } from '@angular/core';

//use the selector name as a the html tag, and the cli will automatically
//use this information as it transpiles the ts to js and includes in the htmls file
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
