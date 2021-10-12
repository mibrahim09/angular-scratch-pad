import { AuthGuard } from './services/auth-guard.service';
import { ErrorHandler, NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitlecaseComponent } from './titlecase/titlecase.component';
import { CustomTitlePipe } from './custom-title.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeButtonComponent } from './like-button/like-button.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { GlobalErrorHandler } from './errors/app-error-handler';
import { GithubcComponent } from './githubc/githubc.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminComponent } from './admin/admin.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { AdminAuthGuard } from './services/admin-auth-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    TitlecaseComponent,
    CustomTitlePipe,
    BootstrapPanelComponent,
    LikeButtonComponent,
    ZippyComponent,
    ContactFormComponent,
    CoursesFormComponent,
    SignupFormComponent,
    PostComponent,
    GithubcComponent,
    NavbarComponent,
    ProfileComponent,
    LoginComponent,
    LogoutComponent,
    AdminComponent,
    HomeComponent,
    NotAuthorizedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    /* path, component */
    RouterModule.forRoot([
      { path: '', component: HomeComponent }, // default
      { path: 'followers', component: GithubcComponent },
      { path: 'users/login', component: LoginComponent },
      { path: 'users/logout', component: LogoutComponent },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard, AdminAuthGuard],
      },
      { path: 'profile/:username', component: ProfileComponent },
      { path: 'profile/:username/:level', component: ProfileComponent },
      { path: 'posts', component: PostComponent },
      { path: 'not-authorized', component: NotAuthorizedComponent }, // ** catches any route
      { path: '**', component: NotFoundComponent }, // ** catches any route
    ]),
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
