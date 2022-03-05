import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(message:string){
    alert(message);
  }

}
