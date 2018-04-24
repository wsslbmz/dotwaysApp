import { NgModule } from '@angular/core';
import { MapsComponent } from './maps/maps';
import { ContentDrawer } from './content-drawer/content-drawer';
import { SendpackageComponent } from './sendpackage/sendpackage';
import { DestinationAddresComponent } from './destination-addres/destination-addres';
import { AddadressComponent } from './addadress/addadress';

@NgModule({
	declarations: [MapsComponent,
    ContentDrawer,
    SendpackageComponent,
    DestinationAddresComponent,
    AddadressComponent],
	imports: [],
	exports: [MapsComponent,
    ContentDrawer,
    SendpackageComponent,
    DestinationAddresComponent,
    AddadressComponent]

})
export class ComponentsModule {}
