import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";



@Component({
  selector: 'app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit{

  columnDefs = [
    { headerName: "id", field: "id", sortable: true, filter: true, resizable: true },
    { headerName: "auth_id", field: "auth_id", sortable: true, filter: true, resizable: true },
    { headerName: "msg", field: "msg", sortable: true, filter: true, resizable: true },
    { headerName: "code", field: "code", sortable: true, filter: true, resizable: true },
    { headerName: "date", field: "date", sortable: true, filter: true, resizable: true }
  ];
/*
  rowData = [
    {id: 1, auth_id: 112, msg: 'adwa', code: 213, date: 2133},
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
*/

  rowData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.rowData = this.http.get(environment.RESPONSES_API);
  }
}
