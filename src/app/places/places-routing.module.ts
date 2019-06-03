import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesPage } from './places.page';

const routes: Routes = [
    {
        path: 'places-tabs',
        component: PlacesPage,
        children: [
            { path: 'search', children:[

                {
                    path: '',
                    loadChildren: './search/search.module#SearchPageModule'
                },
                {
                    path: ':placeId',
                    loadChildren: './search/place-detail/place-detail.module#PlaceDetailPageModule'
                }
            ]
            },
            {
                path: 'offers',
                children: [
                    {
                        path: '',
                        loadChildren: './offers/offers.module#OffersPageModule'
                    },
                    {
                        path: 'new',
                        loadChildren: './offers/new-offer/new-offer.module#NewOfferPageModule'
                    },
                    {
                        path: 'edit/:placeId',
                        loadChildren: './offers/edit-offer/edit-offer.module#EditOfferPageModule'
                    },
                    {
                        path: ':placeId',
                        loadChildren: './offers/offer-booking/offer-booking.module#OfferBookingPageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/places/places-tabs/search',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/places/places-tabs/search',
        pathMatch: 'full'
    }
];
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlacesRoutingModule {

}