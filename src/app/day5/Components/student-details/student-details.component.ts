import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentsService } from '../../Services/students.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [HttpClientModule, CommonModule, RouterModule],
  providers: [StudentsService],
  templateUrl: './student-details.component.html',
  styles: ``
})
export class StudentDetailsComponent implements OnInit{
  ID:any;
  student:any;
  showDeleteModal:boolean = false;

  constructor(myRoute: ActivatedRoute, private studentService: StudentsService, private router: Router) {
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.studentService.GetStudentByID(this.ID).subscribe({
      next:(data) => {
        this.student = data;
      },
      error: (err) => {console.log(err)}
      
    });
  }

  deleteStudent() {
    this.studentService.DeleteStudent(this.ID).subscribe({
     complete: ()=> {this.router.navigate(['/students']); }
    })
  }
}
