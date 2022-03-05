1. adım ng generate component home  kodu ile terminalden bir home component açtık
2. adım app.routing.module.ts dosyasına gidip bu componentin path yazarız. 

const routes: Routes = [
  {
    path:'/',
    component:HomeComponent
  },
  {
    path:'/home',
    component:HomeComponent
  }
];

3. adım app.comonent.ts dosyasına gittik aşağıdaki kodu tanımladık.
<a routerLink="/home">Anasayfa</a>

4. ng generate component about
5.  adım app.routing.module.ts dosyasına gidip about path yazdık.
6. app.component.html dosyasında <a routerLink="/about">Hakkımzda</a> yazdık
7. home.component.ts dosyasına gittik ve title content değişkenleri tanımladık. *ngIf gördük
8. about.component.ts açtık burada ise *ngFor ile bir dizideki elemanların ekrana basılmasını gördük. about.component de switchcase yapısını da gördük.



-- Component Module Kullanımı
-- Components Module Pages Componentler içerisine referans verilecek olan componnetlerin tanımladığı modüldür
-- 1. adım ng generate module Components --flat // components klasör dizinine terminalden gelelim
-- 2.adım bu modülde componentlerin declarationlarını ve exportlarını yazmalıyız. Export ile bu modüldeki componentler diğer modüller veya AppModule'de kullanılabilir olur
-- @NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule
  ],
  exports:[UserComponent] // module den component dışarıda başka bir modüllden kullanılsın diye export edilir.
})

--3 adım ComponentsModule AppModule imports kısmına tanıtmalıyız. Ve AppModule'de Components Modulede bulunan componentler varsa declartions kısmından bu componentleri kaldırmalıyız.

--AppModule altındaki imports kısmını güncelledik

  imports: [ // dışarıdan yüklenen paketlerin uygulama tanıtıldığı kısım. npm den paket yüklediğimizde modül olarak import etmek zorundayız.
    BrowserModule, // uygulamanın tarayıca çalışması için zorunlu modül.
    AppRoutingModule, // Reactjs de BrowserRouter denk gelir. sayfalar arası geçişlerin ayarlarının yapıldığı modul dosyası,
    ComponentsModule
  ],
