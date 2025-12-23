import { Component } from '@angular/core';
import { Istd } from './shared/modules/student';
import { Icompany } from './shared/modules/company';
import { Ipost } from './shared/modules/posts';
import { postsData } from './shared/consts/posts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I love Angular';
  skills :Array<string>=['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Angular'];
  hobbies:Array<string>=['Reading', 'Traveling', 'Gaming', 'Cooking'];

  stdArr:Array<Istd> = [
  { id: 1, name: "Rahul", age: 21, course: "Angular" },
  { id: 2, name: "Sneha", age: 22, course: "React" },
  { id: 3, name: "Amit", age: 20, course: "NodeJS" },
  { id: 4, name: "Pooja", age: 23, course: "Java" }
];

comArr:Array<Icompany> = [
  { id: 1, name: "TCS", location: "Pune", employees: 50000 },
  { id: 2, name: "Infosys", location: "Bangalore", employees: 60000 },
  { id: 3, name: "Wipro", location: "Hyderabad", employees: 45000 },
  { id: 4, name: "Accenture", location: "Mumbai", employees: 70000 }
];



postsArr:Array<Ipost> = postsData

}
