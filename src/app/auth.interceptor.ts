import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if (typeof sessionStorage !== 'undefined') {

    const authString = sessionStorage.getItem('basicauth');
    if (authString) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: authString
        }

      });
      console.log(authString);

      return next(clonedRequest);
    }
  }

  return next(req);
};
