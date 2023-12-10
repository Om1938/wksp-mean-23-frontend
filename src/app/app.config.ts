import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './auth/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: 'BASE_URL',
      useValue: 'http://10.1.16.21:3301/',
    },

    provideHttpClient(withInterceptors([authInterceptor])),
  ],
};
