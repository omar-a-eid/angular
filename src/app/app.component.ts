import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ErrorComponent } from './day4/error/error.component';
import { HeaderComponent } from './day4/header/header.component';
import { ProfileComponent } from './day4/profile/profile.component';
import { RegistrationComponent } from './day4/registration/registration.component';
import { StudentDetailsComponent } from './day4/student-details/student-details.component';
import { StudentsComponent } from './day4/students/students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    HeaderComponent,
    RegistrationComponent,
    StudentsComponent,
    StudentDetailsComponent,
    ProfileComponent,
    ErrorComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // students: { name: string; age: number }[] = [];
  // addStudent(e: any) {
  //   this.students.push(e);
  // }
}
