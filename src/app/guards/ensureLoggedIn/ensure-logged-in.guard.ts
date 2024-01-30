import {CanActivateFn, Router} from '@angular/router';
import {PitLib} from "../../../helpers/PitLib";

export const ensureLoggedInGuard: CanActivateFn = (route, state) => {
  let result=PitLib.User.isLoggedIn()
  let router=new Router()
  if (!result){
    PitLib.Toast('warning','Authentication','Please Login',5000)
    router.navigate([((route.url.toString().includes('panel'))?'/panel/':'/')+'login']);
  }
  return PitLib.User.isLoggedIn();
};
