import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';

import { AcquisitorComponent } from './acquisitor/acquisitor.component';


const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    // canActivate: [AuthguardGuard],
    component: HomeComponent
  },

  {
    path: 'acquisitor',
    component: AcquisitorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AcquisitorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
