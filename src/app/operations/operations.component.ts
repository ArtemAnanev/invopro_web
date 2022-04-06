import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent  implements OnInit{

  columnDefs = [
    { headerName: "id", field: "id", sortable: true, filter: true, resizable: true },
    { headerName: "auth_id", field: "auth_id", sortable: true, filter: true, resizable: true },
    { headerName: "card_number", field: "card_number", sortable: true, filter: true, resizable: true },
    { headerName: "type", field: "type", sortable: true, filter: true, resizable: true },
    { headerName: "date", field: "date", sortable: true, filter: true, resizable: true },
    { headerName: "cur", field: "cur", sortable: true, filter: true, resizable: true },
    { headerName: "oper_amount", field: "oper_amount", sortable: true, filter: true, resizable: true },
    { headerName: "fee_amount", field: "fee_amount", sortable: true, filter: true, resizable: true },
    { headerName: "total_amount", field: "total_amount", sortable: true, filter: true, resizable: true },
    { headerName: "state", field: "state", sortable: true, filter: true, resizable: true }
  ];

  rowData: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.rowData = this.http.get(environment.OPERATIONS_API);
  }
 /* rowData = [
    { id: 1, auth_id: 5377643, card_number: 45874915377643, type: "incoming", date: 11.10, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 1},
    { id: 2, auth_id: 5322643, card_number: 45874985322643, type: "incoming", date: 11.11, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 2 },
    { id: 3, auth_id: 1377643, card_number: 45874981377643, type: "incoming", date: 10.10, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 1},
    { id: 4, auth_id: 9937764, card_number: 45874989937764, type: "incoming", date: 12.12, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 2 },
    { id: 5, auth_id: 4477643, card_number: 45874984477643, type: "incoming", date: 31.10, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 1 },
    { id: 6, auth_id: 5077643, card_number: 45874985077643, type: "incoming", date: 21.10, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 2},
    { id: 7, auth_id: 1117643, card_number: 45874981117643, type: "incoming", date: 15.09, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 1},
    { id: 8, auth_id: 1197643, card_number: 45874981197643, type: "incoming", date: 13.10, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 1 },
    { id: 9, auth_id: 9997764, card_number: 45874919997764, type: "incoming", date: 12.11, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 2 },
    { id: 10, auth_id: 2227764, card_number: 4587422277643, type: "incoming", date: 11.11, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 2 },
    { id: 11, auth_id: 6467643, card_number: 4587496467643, type: "incoming", date: 30.10, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 1 },
    { id: 12, auth_id: 8797643, card_number: 4587498797643, type: "incoming", date: 2.12, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 1 },
    { id: 13, auth_id: 2227643, card_number: 4587492227643, type: "incoming", date: 21.03, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 2 },
    { id: 14, auth_id: 3337643, card_number: 4587493337643, type: "incoming", date: 9.10, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 1 },
    { id: 15, auth_id: 5837643, card_number: 4587495837643, type: "incoming", date: 2.12, cur: "rub", oper_amount: 1200, fee_amount: 20, total_amount: 1220, state: 2 }
  ];
  */
}
