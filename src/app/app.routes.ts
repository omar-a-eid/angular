import { Routes } from '@angular/router';
import { ErrorComponent } from './day4/error/error.component';
import { ProfileComponent } from './day4/profile/profile.component';
import { RegistrationComponent } from './day4/registration/registration.component';
import { StudentDetailsComponent } from './day4/student-details/student-details.component';
import { StudentsComponent } from './day4/students/students.component';

export const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  },
  {
    path: 'students',
    component: StudentsComponent,
  },
  {
    path: 'student/:id',
    component: StudentDetailsComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
