import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { StudentsService } from '../../Services/students.service';

@Component({
  selector: 'app-add-new-student',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  providers: [StudentsService],
  templateUrl: './add-new-student.component.html',
  styles: ``
})
export class AddNewStudentComponent {
  form = new FormGroup({
  name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(20),
      Validators.max(40),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  
  constructor(private studentService: StudentsService, private router: Router) {}
  add() {
    if (this.form.valid) {
      const newStudent = this.form.value;
      this.studentService.AddStudent(newStudent).subscribe({
        complete: () => {
          this.router.navigate(['/students']);
        }
      });
    }
  }
  get nameValid() {
    return this.form.controls['name'].valid;
  }
  get ageValid() {
    return this.form.controls['age'].valid;
  }
  get emailValid() {
    return this.form.controls['email'].valid;
  }
}
