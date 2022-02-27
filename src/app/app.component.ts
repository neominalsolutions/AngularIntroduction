import { Component } from '@angular/core';

// aşağıda @ile başlayan directive ise bunun angular tarafında component olarak tanımlandığını gösterir.
@Component({
  selector: 'app-root', // componentin htmlden çağırılacağı isim. sayfa componentlerinde selector kısmı olmaz.
  templateUrl: './app.component.html', // componentin html dosyası. componentlerin ayrı bir html dosyası var
  styleUrls: ['./app.component.css'] // componentin kebndine ait css dosya
})
export class AppComponent {

  // ReactJs uygulamasında App.js dosyasına gelir.

  title = 'AngularIntroduction';

  click() {

  }
}

// angularda componentler module içerisine import edilmek zorundadır. app module gidip bu componenti declaration kısmına tanımlıyoruz.
