import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService)
  const router = inject(Router)
  const token:boolean = cookieService.check('token')

  try{
    if (!token) {
      router.navigate(['/auth'])
    }
    return token;
  } catch (error) {
    console.log('Algo sucedió??', error)
    return false
  }
};