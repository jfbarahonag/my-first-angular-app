import { Component } from "@angular/core";

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['../app.component.css', './persons.component.css']
})
export class PersonsComponent {
  persons = [
    {
      name: 'Person 1',
      age: 12
    },
    {
      name: 'Person 2',
      age: 24
    },
  ]
}
