import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ba-user', // sayfa componenti olmadığı için selector ismi olmalıdır.
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() firstName:string = ''; // [inputName] köşeli parantezli yazılan değerler input olarak tanımlanır
  @Input() lastName:string = '';

  // event tanımlaması
  @Output() firstNameUpdated:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  changeFirstName(event:any){
    
    const oldName = this.firstName;

    const newName = event.target.value;

    // emit ile component içerisinde gerçekleşen bir olayı dışarıdaki componentlere iletiyorum.
    this.firstNameUpdated.emit(`daha önceki adı ${oldName} olan arkadaşımızın ismi ${newName} olarak güncellendi!`)
    this.firstName = newName;
  }

}
