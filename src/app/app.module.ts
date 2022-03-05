import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

import { UsersComponent } from './pages/users/users.component';

// https://www.tutorialspoint.com/typescript/index.htm

// declaration
@NgModule({
  declarations: [ // yeni açılan bütün componentler burada app module tanıtılır.
    AppComponent, AboutComponent, HomeComponent, UsersComponent
  ],
  imports: [ // dışarıdan yüklenen paketlerin uygulama tanıtıldığı kısım. npm den paket yüklediğimizde modül olarak import etmek zorundayız.
    BrowserModule, // uygulamanın tarayıca çalışması için zorunlu modül.
    AppRoutingModule, // Reactjs de BrowserRouter denk gelir. sayfalar arası geçişlerin ayarlarının yapıldığı modul dosyası,
    ComponentsModule
  ],
  providers: [], // uygulamada kullanacağımız api den veri çekeceğimiz servisleri buraya tanıtırız.
  bootstrap: [AppComponent] // uygulamanın hangi componentden çalışacağını söyleriz.
})
export class AppModule { }
