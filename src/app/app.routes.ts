import { Routes } from '@angular/router';
import { AddNewStudentComponent } from './day5/Components/add-new-student/add-new-student.component';
import { ErrorComponent } from './day5/Components/error/error.component';
import { StudentDetailsComponent } from './day5/Components/student-details/student-details.component';
import { StudentsComponent } from './day5/Components/students/students.component';
import { UpdateStudentComponent } from './day5/Components/update-student/update-student.component';

export const routes: Routes = [
 {path: "", redirectTo:"students", pathMatch:"full"},
 {path: "students", component: StudentsComponent},
 {path: "students/:id", component: StudentDetailsComponent},
 {path: "update/:id", component: UpdateStudentComponent},
 {path: "add", component: AddNewStudentComponent},
 {path: "**", component: ErrorComponent},

];
