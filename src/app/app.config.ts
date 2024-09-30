import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
} from '@angular/fire/analytics';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'employee-transport-2bd6a',
        appId: '1:902685995403:web:c4919dd6985672836b3f8e',
        storageBucket: 'employee-transport-2bd6a.appspot.com',
        apiKey: 'AIzaSyBVNXVyA6wlrrBep0GyDzOAJXbH7SlQjAY',
        authDomain: 'employee-transport-2bd6a.firebaseapp.com',
        messagingSenderId: '902685995403',
        measurementId: 'G-B1QL2GF9C7',
      }),
    ),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
  ],
};
