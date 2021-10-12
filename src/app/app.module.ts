import { ErrorHandler, NgModule } from '@angular/core';
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
