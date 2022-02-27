import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {


  today: Date = new Date();
  selectedCity:string = '';

  changeCity (event:any){
    console.log('event',event)
    this.selectedCity = event.target.value;
  }

  names = [
    {
      name:'harun',
      surname:'Durak'
    },
    {
      name:'burhan',
      surname:'Kara'
    },
    {
      name:'ayşegül',
      surname:'Avcı'
    },
    {
      name:'Erhan',
      surname:'Mert'
    },
    {
      name:'Mert',
      surname:'Alptekin'
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
