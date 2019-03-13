import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtosComponent } from './atos/atos.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CircuitComponent } from './circuit/circuit.component';

const routes: Routes = [
  {
    path: 'home',
    component: AtosComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'circuit',
    component: CircuitComponent
  },
  {
    path: '**',
    component: AtosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
