import {Env} from "./Env";

export const Endpoints= {
  ENDPOINT:Env.ENDPOINT,
  User: {
    isAuth: Env.ENDPOINT + 'user/is-auth',
    Login: Env.ENDPOINT + 'user/login',
    Role:{
      List: Env.ENDPOINT +'role/list',
      EDIT: Env.ENDPOINT +'role/edit',
      DtList: Env.ENDPOINT +'role/dtlist',
      Create: Env.ENDPOINT +'role/create',
    },
  },
  Category:{
    Create: Env.ENDPOINT +'category/create',
    DtList: Env.ENDPOINT +'category/dtlist',
    List: Env.ENDPOINT +'category/list',
    Edit: Env.ENDPOINT +'category/edit',
  },
  SubCategory:{
    Create: Env.ENDPOINT +'sub-category/create',
    DtList: Env.ENDPOINT +'sub-category/dtlist',
    List: Env.ENDPOINT +'sub-category/list',
    Edit: Env.ENDPOINT +'sub-category/edit',
  }
}
