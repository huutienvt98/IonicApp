import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PlacesService } from "../../places.service";
import { Place } from "../../places.model";
import { NavController } from "@ionic/angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-edit-offer",
  templateUrl: "./edit-offer.page.html",
  styleUrls: ["./edit-offer.page.scss"]
})
export class EditOfferPage implements OnInit {
  place: Place;
  form: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private placesServices: PlacesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has("placeId")) {
        this.navCtrl.navigateBack("places/places-tabs/offers");
        return;
      }
      this.place = this.placesServices.getPlace(paramMap.get("placeId"));

      this.form = new FormGroup({
        title: new FormControl(this.place.title, {
          updateOn: "blur",
          validators: [Validators.required]
        }),
        description: new FormControl(this.place.description, {
          updateOn: "blur",
          validators: [Validators.required, Validators.maxLength(180)]
        })
      });
    });
  }

  onUpdateOffer() {
    if (!this.form.valid) {
      return;
    }
    console.log(this.form);
  }
}
