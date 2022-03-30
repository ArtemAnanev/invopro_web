import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";

export interface ResponsesElement {
  id: number;
  auth_id: number;
  msg: any;
  code: number;
  date: any
}

const RESPONSES_DATA: ResponsesElement[] = [
  {id: 1, auth_id: 112, msg: 'adwad', code: 213, date: 2133},
  {id: 2, auth_id: 112, msg: 'adwad', code: 213, date: 2133},
  {id: 3, auth_id: 112, msg: 'adwad', code: 213, date: 2133},
  {id: 4, auth_id: 112, msg: 'adwad', code: 213, date: 2133},
  {id: 5, auth_id: 112, msg: 'adwad', code: 213, date: 2133},
  {id: 6, auth_id: 112, msg: 'adwad', code: 213, date: 2133},
  {id: 7, auth_id: 112, msg: 'adwad', code: 213, date: 2133},
  {id: 8, auth_id: 112, msg: 'adwad', code: 213, date: 2133},
  {id: 9, auth_id: 112, msg: 'adwad', code: 213, date: 2133},
  {id: 10, auth_id: 112, msg: 'adwad', code: 213, date: 2133},
];

@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'auth_id', 'msg', 'code', 'date'];
  dataSource = new MatTableDataSource<ResponsesElement>(RESPONSES_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
