import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-details-component.component.html',
  styleUrls: ['./employee-details-component.component.scss']
})
export class EmployeeDetailsComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
