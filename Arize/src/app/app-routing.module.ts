import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blogs/:id', component: BlogArticleComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
