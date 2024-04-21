import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentsService } from '../../Services/students.service';
import { OneStudentComponent } from '../one-user/one-student.component';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [HttpClientModule, RouterModule, OneStudentComponent],
  providers: [StudentsService],
  templateUrl: './students.component.html',
  styles: ``
})
export class StudentsComponent implements OnInit {
  constructor(private StudentsService: StudentsService) {}
  Students: any;
  ngOnInit(): void {
    this.StudentsService.GetAllStudents().subscribe({
        next:(data)=>{
          this.Students = data;
        },
       error:(error)=>{console.log(error)}
      });
  }
}
