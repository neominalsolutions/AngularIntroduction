import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// https://www.tutorialspoint.com/typescript/index.htm

@NgModule({
  declarations: [ // yeni açılan bütün componentler burada app module tanıtılır.
    AppComponent, AboutComponent, HomeComponent
  ],
  imports: [ // dışarıdan yüklenen paketlerin uygulama tanıtıldığı kısım. npm den paket yüklediğimizde modül olarak import etmek zorundayız.
    BrowserModule, // uygulamanın tarayıca çalışması için zorunlu modül.
    AppRoutingModule // Reactjs de BrowserRouter denk gelir. sayfalar arası geçişlerin ayarlarının yapıldığı modul dosyası
  ],
  providers: [], // uygulamada kullanacağımız api den veri çekeceğimiz servisleri buraya tanıtırız.
  bootstrap: [AppComponent] // uygulamanın hangi componentden çalışacağını söyleriz.
})
export class AppModule { }
