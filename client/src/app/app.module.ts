import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MessageModule } from './messages/message.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/containers/nav-menu/nav-menu.component';

import { EnvServiceProvider } from './env.service.provider';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { NavMenuDisplayComponent } from './nav-menu/components/nav-menu-display/nav-menu-display.component';
import { LoginDisplayComponent } from './login/components/login-display/login-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NavMenuDisplayComponent,
    LoginDisplayComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MessageModule,
    UserModule,
    ProductModule,
    CartModule,
    OrderModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({}, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      }
    }),
    StoreDevtoolsModule.instrument({
       name: 'Shop',
       maxAge: 25,
       logOnly: environment.production
    }),
    EffectsModule.forRoot([])
  ],
  providers: [EnvServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
