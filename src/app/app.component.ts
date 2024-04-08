import { Component } from '@angular/core';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentsComponent } from './components/students/students.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegistrationComponent, StudentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo';
  students: { name: string; age: number }[] = [];
  addStudent(e: any) {
    this.students.push(e);
  }
}
