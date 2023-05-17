import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page/page1/page1.component';
import { Page2Component } from './page/page2/page2.component';
import { Page3Component } from './page/page3/page3.component';
import { Page4Component } from './page/page4/page4.component';
import { Page5Component } from './page/page5/page5.component';
import { Page6Component } from './page/page6/page6.component';
import { FormularioComponent } from './formulario/formulario.component';

const routes: Routes = [
  {path:"page/page1",component: Page1Component},
  {path:"page/page2",component: Page2Component},
  {path:"page/page3",component: Page3Component},
  {path:"page/page4",component: Page4Component},
  {path:"page/page5",component: Page5Component},
  {path:"page/page6",component: Page6Component},
  {path:"formulario",component: FormularioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }