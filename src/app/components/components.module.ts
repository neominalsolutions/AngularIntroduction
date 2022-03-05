import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [UserComponent, ButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[UserComponent, ButtonComponent] // module den component dışarıda başka bir modüllden kullanılsın diye export edilir.
})
export class ComponentsModule { }
