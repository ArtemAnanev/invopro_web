import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ColDef} from "ag-grid-community";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-authorizations',
  templateUrl: './authorizations.component.html',
  styleUrls: ['./authorizations.component.scss']
})
export class AuthorizationsComponent implements OnInit{
  columnDefs: ColDef[] = [
    { headerName: "id", field: "id", sortable: true, filter: true, resizable: true },
    { headerName: "msg_id", field: "msg_id", sortable: true, filter: true, resizable: true },
    { headerName: "card_number", field: "card_number", sortable: true, filter: true, resizable: true },
    { headerName: "code", field: "code", sortable: true, filter: true, resizable: true },
    { headerName: "rrn", field: "rrn", sortable: true, filter: true, resizable: true },
    { headerName: "date", field: "date", sortable: true, filter: true, resizable: true }
  ];

  rowData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData = this.http.get(environment.AUTHORIZATIONS_API);
  }
}
