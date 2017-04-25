import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GardenModal } from '../pages/gardenModal/gardenModal';
import { GardenSetup } from '../pages/gardenSetup/gardenSetup';
import { Location } from '../pages/location/location';
import { Size } from '../pages/size/size';
import { Ph } from '../pages/ph/ph';
import { Plants } from '../pages/plants/plants';
import { Pair } from '../pages/pair/pair';
import { Place } from '../pages/place/place';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GardenStatus } from '../providers/garden-status';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GardenModal,
    GardenSetup,
    Location,
    Size,
    Ph,
    Plants,
    Pair,
    Place
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GardenModal,
    GardenSetup,
    Location,
    Size,
    Ph,
    Plants,
    Pair,
    Place
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GardenStatus
  ]
})
export class AppModule {}
