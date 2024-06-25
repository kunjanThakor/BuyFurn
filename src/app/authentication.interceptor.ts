import { HttpInterceptorFn } from '@angular/common/http';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {

  if (typeof sessionStorage && sessionStorage.getItem('username') != undefined) {

    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
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
