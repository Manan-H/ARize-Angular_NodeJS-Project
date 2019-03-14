import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BlogsComponent } from './components/blogs/blogs.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'blogs', component: BlogsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
