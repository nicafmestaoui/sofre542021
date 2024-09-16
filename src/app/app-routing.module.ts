import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { WordComponent } from './directives/word/word.component';
import { FirstComponent } from './first/first.component';
import { ColorComponent } from './components/color/color.component';
import { SecondComponent } from './second/second.component';
import { DetailComponent } from './cv/detail/detail.component';
import { DetailPersonneComponent } from './cv/detail-personne/detail-personne.component';
import { AddPersonneComponent } from './cv/add-personne/add-personne.component';
import { BackComponent } from './components/back/back.component';
import { FrontComponent } from './components/front/front.component';
import { NF404Component } from './components/nf404/nf404.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';

/*word*/
const routes: Routes = [
  { path: '', component: FirstComponent },
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: 'todo', component: TodoComponent },
      { path: 'word', component: WordComponent },
    ],
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: BackComponent,
    children: [{ path: 'second', component: SecondComponent }],
  },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddPersonneComponent, canActivate: [AuthGuard] },
      { path: ':id', component: DetailPersonneComponent },
    ],
  },
  { path: 'color/:couleur', component: ColorComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NF404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
