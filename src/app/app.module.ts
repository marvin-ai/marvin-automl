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
import { TrainerComponent } from './trainer/trainer.component';
import { StatusService } from './status.service';
import { AcquisitorComponent } from './acquisitor/acquisitor.component';


const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    //canActivate: [AuthguardGuard],
    component: HomeComponent
  },
  {
    path: 'trainer',
    //canActivate: [AuthguardGuard],
    component: TrainerComponent
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
    TrainerComponent,
    AcquisitorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, AuthguardGuard, StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
