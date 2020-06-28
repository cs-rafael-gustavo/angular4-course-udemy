import { Usuario } from "../../shared/model/usuario.model";
import * as firebase from "firebase";

export class Autenticacao {
  public cadastrarUsuario(usuario: Usuario): void {
    firebase
      .auth()
      .createUserWithEmailAndPassword(usuario.email, usuario.senha)
      .then((res: any) => {
        delete usuario.senha;

        firebase
          .database()
          .ref(`usuario_detalhe/${btoa(usuario.email)}`)
          .set(usuario);
      })
      .catch((err: Error) => console.log(err));
  }

  public autenticar(email: string, senha: string): void {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((res: any) => console.log(res))
      .catch((err: Error) => console.log(err));
  }
}
