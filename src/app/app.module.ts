import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase Imports
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';

// Import Environment Config
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';
import { BboyMovesVisualComponent } from './bboy-moves-visual/bboy-moves-visual.component';

@NgModule({
  declarations: [
    AppComponent,
    BboyMovesVisualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseconfig)), // Firebase Initialization
    provideAuth(() => getAuth()), // Firebase Authentication
    provideFirestore(() => getFirestore()), // Firestore Database
    provideStorage(() => getStorage()) 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
