import { User } from 'src/auth/user.model';
import { AuthData } from 'src/auth/auth-data.model';


export class AuthService{
  private user:User;

  registerUSer(authData: AuthData){
      this.user = {
        email: authData.email,
        userId: Math.round(Math.random() * 10000).toString()
      };
  }

  login(authData: AuthData){
    this.user = {
        email: authData.email,
        userId: Math.round(Math.random() * 10000).toString()
      };
  }

  logout() {
    this.user = null;
  }

  getUser(){
    return {...this.user};
  }

  isAuth(){
    return this.user != null;
  }
}