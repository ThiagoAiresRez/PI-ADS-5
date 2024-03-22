import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {LocationStrategy, HashLocationStrategy} from '@angular/common'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HTTP_INTERCEPTORS } from '@angular/common/http';


import {ApplicationErrorHandler} from './app.error-handler'
import { ROUTES } from './app.routes';

import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantsService } from './restaurants/restaurant/restaurants.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { ShoppingCartService } from './restaurant-detail/shopping-cart/shopping-cart.service';

import { OrderService } from './order/order.service';

import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SnackbarComponent } from './shared/messages/snackbar/snackbar.component'
import { NotificationService } from './shared/messages/notification.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './security/login/login.component';
import { LoginService } from './security/login/login.service';
import { LoggedInGuard } from './security/loggedin.guard';
import { SharedModule } from './shared/shared.module';
import { RadioComponent } from './radio/radio.component';
import { UserDetailComponent } from './header/user-detail/user-detail.component';
import { LeaveOrderGuard } from 'app/order/leave-order.guard';
import { AuthInterceptor } from './security/auth.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    SnackbarComponent,
    NotFoundComponent,
    LoginComponent,
    RadioComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [RestaurantsService, ShoppingCartService, OrderService, NotificationService, LoginService, LoggedInGuard, LeaveOrderGuard,
             {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}, 
             {provide: LocationStrategy, useClass: HashLocationStrategy },
             {provide: ErrorHandler, useClass: ApplicationErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
