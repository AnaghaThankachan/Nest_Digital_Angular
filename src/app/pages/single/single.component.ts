import { Component } from '@angular/core';
import { DepartmentComponent } from '../department/department.component';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [DepartmentComponent],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {

}
