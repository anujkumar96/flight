import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BaggageComponent } from './subpages/baggage/baggage.component';
import { BookComponent } from './subpages/book/book.component';
import { SearchComponent } from './subpages/book/search/search.component';
import { BookingFormComponent } from './subpages/booking-form/booking-form.component';
import { PreviousBookingComponent } from './subpages/booking-form/previous-booking/previous-booking.component';
import { TicketDetailsComponent } from './subpages/booking-form/ticket-details/ticket-details.component';
import { ContactComponent } from './subpages/contact/contact.component';
import { FormchildComponent } from './subpages/formchild/formchild.component';
import { LoginPageComponent } from './subpages/login-page/login-page.component';
import { OffersComponent } from './subpages/offers/offers.component';
import { SignUpComponent } from './subpages/sign-up/sign-up.component';
import { TravelInfoComponent } from './subpages/travel-info/travel-info.component';
const routes: Routes = [{path: '', component: HomeComponent },
{path:"home",component:HomeComponent},
{path:"contact",component:ContactComponent},
{path:"offers",component:OffersComponent},
{path:"baggage",component:BaggageComponent},
{path:"travel-info",component:TravelInfoComponent},
{path:"book",component:BookComponent},
{path:"login",component:LoginPageComponent},
{path:"sign-up",component:SignUpComponent},
{path:"offers",component:OffersComponent},
{path:"search",component:SearchComponent},
{path:"booking-form",component:BookingFormComponent,children:[{path:'formchild', component:FormchildComponent}]},
{path:"ticket-details",component:TicketDetailsComponent},
{path:"previous-booking", component:PreviousBookingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
