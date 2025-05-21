import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  standalone: false,
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit  {

  constructor(private toastr: ToastrService){}

  ngOnInit(): void {
    this.toastr.info('StudentsComponent initialized!', 'Barrinha Surf School!', {closeButton: true, progressBar: true});
  }

}
