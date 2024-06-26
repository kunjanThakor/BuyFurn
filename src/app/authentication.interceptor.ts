import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { EncryptionService } from './Services/encryption.service';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {

  if (typeof sessionStorage && sessionStorage.getItem('username') != undefined) {
    const encryptionService = inject(EncryptionService);
    const username = encryptionService.decryptData(sessionStorage.getItem('username'));
    const password = encryptionService.decryptData(sessionStorage.getItem('password'));
    const auth = 'Basic ' + btoa(username + ':' + password);
    const authReq = req.clone({
      setHeaders: {
        Authorization: auth,
      },
    })
    return next(authReq)
  }
  else {
    return next(req)
  }
};
