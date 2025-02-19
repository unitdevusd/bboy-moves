import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BboyMovesVisualComponent } from './bboy-moves-visual/bboy-moves-visual.component';

const routes: Routes = [
  {
    path:'',
    component: BboyMovesVisualComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
