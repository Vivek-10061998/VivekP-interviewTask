import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee.interface';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() data: Employee[] = [];

  sortedData: Employee[]=[];
  originalData: Employee[] = [];


  constructor() { }

  sortTable(order: 'asc' | 'desc') {
    if (order === 'asc') {
      this.sortedData = this.data.sort((a, b) => a.employee_age - b.employee_age);
    } else {
      this.sortedData = this.data.sort((a, b) => b.employee_age - a.employee_age);
    }
  }
  
}
