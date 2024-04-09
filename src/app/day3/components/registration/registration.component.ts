import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  @Output() addEvent = new EventEmitter();
  name = '';
  age = 0;
  addStudent() {
    if (this.age > 10 && this.age < 30 && this.name.length >= 3) {
      let student: { name: string; age: number } = {
        name: this.name,
        age: this.age,
      };
      this.addEvent.emit(student);
    }
  }
}
