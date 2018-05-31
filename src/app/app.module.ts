import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Authorization } from './services/authorization';
import { AuthLogged } from './services/auth-logged.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'workplace-login', pathMatch: 'full' },
  { path: 'workplace-login', component: LoginComponent , canActivate : [AuthLogged]},
  // { path: 'register', component: RegisterComponent , canActivate : [AuthLogged]},
  { path: 'workplace-home', component: HomeComponent, canActivate: [Authorization] }
  {path : '**' , component : NotFoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService, Authorization , AuthLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
