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
import { environment } from '@environments/environment';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideAnimationsAsync(),
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyBVNXVyA6wlrrBep0GyDzOAJXbH7SlQjAY',
        authDomain: 'employee-transport-2bd6a.firebaseapp.com',
        projectId: 'employee-transport-2bd6a',
        storageBucket: 'employee-transport-2bd6a.appspot.com',
        messagingSenderId: '902685995403',
        appId: '1:902685995403:web:192c37fa77f22c156b3f8e',
        measurementId: 'G-2DM794RMCE',
      }),
    ),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
  ],
};
