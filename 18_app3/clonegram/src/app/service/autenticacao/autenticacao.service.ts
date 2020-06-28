import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Usuario } from "../../shared/model/usuario.model";
import * as firebase from "firebase";

@Injectable()
export class Autenticacao {
  constructor(private router: Router) {}

  public token_id: string;

  public cadastrarUsuario(usuario: Usuario): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((res: any) => {
        delete usuario.senha;

        firebase
          .database()
          .ref(`usuario_detalhe/${btoa(usuario.email)}`)
          .set(usuario);
      })
      .catch((err: Error) => err.message);
  }

  public autenticar(email: string, senha: string): Promise<any> {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((res: any) =>
        firebase
          .auth()
          .currentUser.getIdToken()
          .then((idToken: string) => {
            this.token_id = idToken;
            localStorage.setItem("idToken", idToken);
            this.router.navigate(["/home"]);
          })
      )
      .catch((err: Error) => err.message);
  }

  public autenticado(): boolean {
    if (
      this.token_id === undefined &&
      localStorage.getItem("idToken") !== null
    ) {
      this.token_id = localStorage.getItem("idToken");
    }

    if (this.token_id === undefined) {
      this.router.navigate(["/"]);
    }

    return this.token_id !== undefined;
  }

  public sair(): void {
    firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.removeItem("idToken");
        this.token_id = undefined;
        this.router.navigate(["/"]);
      });
  }
}
