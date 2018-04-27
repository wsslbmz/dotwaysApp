import { NgModule } from '@angular/core';
import { MapsComponent } from './maps/maps';
import { ContentDrawer } from './content-drawer/content-drawer';
import { SendpackageComponent } from './sendpackage/sendpackage';
import { DestinationAddresComponent } from './destination-addres/destination-addres';
import { AddadressComponent } from './addadress/addadress';
import { RealtimenavComponent } from './realtimenav/realtimenav';

@NgModule({
	declarations: [MapsComponent,
    ContentDrawer,
    SendpackageComponent,
    DestinationAddresComponent,
    AddadressComponent,
    RealtimenavComponent],
	imports: [],
	exports: [MapsComponent,
    ContentDrawer,
    SendpackageComponent,
    DestinationAddresComponent,
    AddadressComponent,
    RealtimenavComponent]

})
export class ComponentsModule {}
