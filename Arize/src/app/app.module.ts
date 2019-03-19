import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { LatestComponent } from './components/latest/latest.component';
import { ServicesComponent } from './components/services/services.component';
import { WhyusComponent } from './components/whyus/whyus.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SubscribeFormsComponent } from './components/subscribe-forms/subscribe-forms.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { ContactComponent } from './components/contact/contact.component';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactusFormsComponent } from './components/contactus-forms/contactus-forms.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';
import { BlogArticleComponent } from './components/blog-article/blog-article.component';
import { TermsComponent } from './components/terms/terms.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    LatestComponent,
    ServicesComponent,
    WhyusComponent,
    PortfolioComponent,
    PricingComponent,
    SubscribeFormsComponent,
    BlogsComponent,
    ContactComponent,
    ContactusFormsComponent,
    PrivacyPolicyComponent,
    BlogArticleComponent,
    TermsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FontAwesomeModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule,
    ScrollToModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA83kW20SxRpEL7kMQX9UfQBPQmaDHw5q0'
    }),
    NgbModule.forRoot()
  ],
  providers: [GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule {}
