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

