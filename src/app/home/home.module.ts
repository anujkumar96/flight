import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BottomComponent } from './body/bottom/bottom.component';
import { TopComponent } from './body/top/top.component';
import { FooterComponent } from './footer/footer.component';
import { CenterComponent } from './header/center/center.component';
import { LeftLogoComponent } from './header/left-logo/left-logo.component';
import { RightLogoComponent } from './header/right-logo/right-logo.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { SubfooterComponent } from './subfooter/subfooter.component';
import { ContactComponent } from './subpages/contact/contact.component';
import { MaterialModule } from '../material/material.module';
import { OffersComponent } from './subpages/offers/offers.component';
import { BaggageComponent } from './subpages/baggage/baggage.component';
import { TravelInfoComponent } from './subpages/travel-info/travel-info.component';
import { BookBottomComponent } from './subpages/book/book-bottom/book-bottom.component';
import { BookTopComponent } from './subpages/book/book-top/book-top.component';
import { BookCenterComponent } from './subpages/book/book-center/book-center.component';
import { BookComponent } from './subpages/book/book.component';
import { LoginPageComponent } from './subpages/login-page/login-page.component';
import { SignUpComponent } from './subpages/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './subpages/book/search/search.component';
import { BookingFormComponent } from './subpages/booking-form/booking-form.component';
import { TicketDetailsComponent } from './subpages/booking-form/ticket-details/ticket-details.component';
import { FormchildComponent } from './subpages/formchild/formchild.component';
import { MatCardModule } from '@angular/material/card';
import { PreviousBookingComponent } from './subpages/booking-form/previous-booking/previous-booking.component';
@NgModule({
  declarations: [
    HomeComponent,
    BottomComponent,
    TopComponent,
    FooterComponent,
    CenterComponent,
    LeftLogoComponent,
    RightLogoComponent,
    SocialmediaComponent,
    SubfooterComponent,
    ContactComponent,
    OffersComponent,
    BaggageComponent,
    TravelInfoComponent,
    BookBottomComponent,
    BookTopComponent,
    BookCenterComponent,
    BookComponent,
    LoginPageComponent,
    SignUpComponent,
    SearchComponent,
    BookingFormComponent,
    TicketDetailsComponent,
    FormchildComponent, PreviousBookingComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeRoutingModule,
    MatCardModule,
    HomeComponent,
    LeftLogoComponent,
    RightLogoComponent,
    CenterComponent,
    FooterComponent,
    SocialmediaComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class HomeModule {}
