import { Component,ViewChild } from '@angular/core';
import { ListService } from './list.service';
import {MatSort} from '@angular/material/sort';
import{ MatTableDataSource} from '@angular/material/table';

export interface UserData{
  id:string;
  userId: string;
  title:string;
  body: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listangular';
  displayedColumn:string[]=['id','userid','title','body']
datasource! :MatTableDataSource<UserData>
@ViewChild(MatSort) sort!:MatSort

post :any;







constructor(private service: ListService) {

this.service.getData().subscribe((data) => {
  console.log(data);
  this.post =data;
  this.datasource = new MatTableDataSource(this.post)
this.datasource.sort=this.sort

});
}
applyFilter(event :Event){
  const filtervalue = (event.target as HTMLInputElement).value;
this.datasource.filter = filtervalue.trim().toLowerCase()
}

}

