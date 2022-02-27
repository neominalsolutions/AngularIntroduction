import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ba-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // title ve content değişkenlerimiz ReactJs deki useState değişkenlerimize benzer. yanlız angularda changeDetection özelliği sayesinde bu değişkenlerdeki değişim için bir local state mekanizması çalıştırmanıza gerek kalmaz.
  title:string = 'Başlık';
  content:string = 'İçerik';

  constructor() { }

  ngOnInit(): void {
  }

  // react Js de aşağıdaki şekilde function tanımlıyorduk. arrow function
  
  /*
  const clickMe = () => {

  }
  */

  // angulardaki function tanımlama şeklimiz
  // değişkenler function içerisinde this keyword ile çağırılır.
  clickMe() {
    this.content = "Değişen İçerik";
    alert(this.title)
  }

  changeTitle(event:any) {
    this.title = event.target.value;
    // title güncelledik.
  }

}
