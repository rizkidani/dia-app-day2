import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show: boolean = false;
  names: string[] = ['Alice', 'Bob', 'Charlie', 'Diana'];

  isError: boolean = true;
  size: number = 14;

  today: Date = new Date();
  price: number = 100000;
  text: string = 'hello world';
  user: {} = { name: 'John', age: 30 };

}
