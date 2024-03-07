import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeInfo } from 'src/app/interface/employee-info';
import { AppEmployeeService } from 'src/app/service/app-employee/app-employee.service';

@Component({
  selector: 'app-app-employee-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-employee-component.component.html',
  styleUrls: ['./app-employee-component.component.scss']
})

export class AppEmployeeComponentComponent implements OnInit {

  constructor( public employeeInfoService: AppEmployeeService) { }

  ngOnInit(): void {
  }

}
