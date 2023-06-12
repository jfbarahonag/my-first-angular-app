import { Component } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  name = {
    first: 'Juan',
    last: 'Barahona'
  }

  age: number = 27;
  //  private age: number = 27;
  //  getAge(): number {
  //   return this.age
  //  }

  repText: string = '';
  getRepValue(text: string) {
    this.repText = text;
  }
}
