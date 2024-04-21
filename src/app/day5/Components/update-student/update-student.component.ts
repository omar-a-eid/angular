import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../Services/students.service';

@Component({
  selector: 'app-update-student',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule],
  providers: [StudentsService],
  templateUrl: './update-student.component.html',
  styles: ``
})
export class UpdateStudentComponent implements OnInit{
  ID:any;
  
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      age: new FormControl('', [
        Validators.required,
        Validators.min(20),
        Validators.max(40),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

  constructor(myRoute: ActivatedRoute, private studentService: StudentsService, private router: Router) {
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.studentService.GetStudentByID(this.ID).subscribe({
      next:(data: any) => {
        // Initialize form fields with the data
        this.form.patchValue({
          name: data.name,
          age: data.age,
          email: data.email
        });
      },
      error: (err) => {console.log(err)}
    });
  }
  

  update() {
    if (this.form.valid) {
      const newStudent = this.form.value;
      this.studentService.UpdateStudent(newStudent, this.ID).subscribe({
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
