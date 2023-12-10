import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);
  return next(req).pipe(
    tap({
      next: (event) => {
        // Do Nothing
      },
      error: (err) => {
        if (err.status === 401) {
          router.navigate(['/auth/login']);
        }
      },
    })
  );
};
