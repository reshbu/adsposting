import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CribListingComponent } from "./crib-listing/crib-listing.component";
import { CribCardComponent } from "./crib-card/crib-card.component";
import { AddListingFormComponent } from "./add-listing-form/add-listing-form.component";


import { CribsService } from "./services/cribs.service";
import { UtilService } from "./services/util.service";
import { SortByPipe } from "./pipes/sort-by.pipe";

@NgModule({
  imports: [BrowserModule, FormsModule,HttpClientModule],
  declarations: [
    AppComponent,
    CribListingComponent,
    HelloComponent,
    CribListingComponent,
    CribCardComponent,
    AddListingFormComponent,
    SortByPipe
  ],
  providers: [CribsService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule {}
