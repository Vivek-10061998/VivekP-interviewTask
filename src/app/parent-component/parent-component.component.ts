
import { Component, OnInit, ViewChild } from '@angular/core';
import { MyDataService } from '../service/my-data.service';

interface Employee {
  employee_name: string;
  employee_salary: number;
  employee_age: number;
}

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})

  export class ParentComponent implements OnInit {
    
myData:any;

  constructor(private myDataService: MyDataService) { }

  ngOnInit() {
    this.myDataService.getData().subscribe((data:any)=>{
      this.myData = data['data'];
      console.log(data)

    })
  }

 
   
}
    


 


