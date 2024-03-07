import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppEmployeeComponentComponent } from './component/app-employee-component/app-employee-component.component';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [CommonModule, RouterOutlet, AppEmployeeComponentComponent]
})
export class AppComponent {
  title = 'angular-project-using-standal';
}
