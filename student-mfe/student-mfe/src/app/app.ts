import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Student } from './models/student.model';
import { StudentService } from './services/student.service';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './app.html',
 styleUrls: ['./app.scss'] 
})
export class App {
  protected readonly title = signal('student-mfe');
  students = signal<Student[]>([]);
  loading = signal(false);
  constructor(private studentService: StudentService  ) { }
  ngOnInit() {
    this.fetchStudents();
  }
  fetchStudents() {
    this.loading.set(true);
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.students.set(data);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error loading students:', error);
        this.loading.set(false);
      }
    });
  }

}
