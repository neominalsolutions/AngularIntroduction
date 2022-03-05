import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ba-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() title:string = 'button1';
  @Input() bgColor:string = 'red';
  @Input() color:string = 'white';


  constructor() { }

  ngOnInit(): void {
  }

}
