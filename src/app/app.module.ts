import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ContactComponent } from './contact/contact.component';
import { MakeAnAppointmentComponent } from './make-an-appointment/make-an-appointment.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentsComponent } from './departments/departments.component';
import { FaqComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    DoctorsComponent,
    ContactComponent,
    MakeAnAppointmentComponent,
    HomeComponent,
    DepartmentsComponent,
    FaqComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'departments', component: DepartmentsComponent},
      {path: 'doctors', component: DoctorsComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'make-an-appointment', component: MakeAnAppointmentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
