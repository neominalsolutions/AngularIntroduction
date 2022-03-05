import { Component } from '@angular/core';

// aşağıda @ile başlayan directive ise bunun angular tarafında component olarak tanımlandığını gösterir.
@Component({
  selector: 'app-root', // componentin htmlden çağırılacağı isim. sayfa componentlerinde selector kısmı olmaz.
  templateUrl: './app.component.html', // componentin html dosyası. componentlerin ayrı bir html dosyası var
  styleUrls: ['./app.component.css'] // componentin kebndine ait css dosya
})
export class AppComponent {

  // ReactJs uygulamasında App.js dosyasına gelir.

    // eğer bir şey sayfa componentiyse pages klasörü altına açılan bir component ise ve route üzerinden bu componente erişiliyorsa yani direk olarak başka bir componentin için select ismine göre çağırılmıyorsa. sayfa componentlerinin yanlışlıkla bir compoennt içerisinden isim ile çağırılmaması için selector kısmını siliyoruz.

    // eğer bir şey sayfa componenti değilse bu durumda components klasörü altıba yazılır ve bir sayfa compobnenti tarafından ekranda gösterilmek için çağırılır. Bu sebp ile selector ismine ihtiyacı vardır.

    // Sayfa componentlerinde @Input ve @Output tanımlamasına ihtiyacımız yok.

    // Sayfa componentlerini tek çağırdığımız yer routingModule dosyasıdır.
    

    // <ba-user [firstName]="'Ayşegül'" [lastName]="'Avcı'"></ba-user>

    // aynı zamanda sayfa cıomponenti olmayan components klasörü altında tutulan componentler @Input ve @Output props'a sahip olabilirler.


  title = 'AngularIntroduction';

  click() {

  }
}

// angularda componentler module içerisine import edilmek zorundadır. app module gidip bu componenti declaration kısmına tanımlıyoruz.
