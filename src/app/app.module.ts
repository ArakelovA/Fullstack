import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import {AppComponent} from './app.component'
import {LoginPageComponent} from './login-page/login-page.component'
import {AppRoutingModule} from './app-routing.module'
import {AuthLayoutComponent} from './shared/layouts/auth-layout/auth-layout.component'
import {SiteLayoutComponent} from './shared/layouts/site-layout/site-layout.component'
import {RegisterPageComponent} from './register-page/register-page.component'
import {TokenInterceptor} from './shared/classes/token.interceptor';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { ConfirmPageComponent } from './confirm-page/confirm-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatFormComponent } from './chat-page/chat-form/chat-form.component';
import { PositionsFormComponent } from './chat-page/chat-form/positions-form/positions-form.component';
import { ChatDialigComponent } from './chat-page/chat-dialig/chat-dialig.component'



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    AuthLayoutComponent,
    SiteLayoutComponent,
    RegisterPageComponent,
    OverviewPageComponent,
    AnalyticsPageComponent,
    HistoryPageComponent,
    OrderPageComponent,
    CategoriesComponent,
    LoaderComponent,
    ConfirmPageComponent,
    ChatPageComponent,
    ChatFormComponent,
    PositionsFormComponent,
    ChatDialigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
