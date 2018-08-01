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
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TrainerComponent
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
