import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private usuarios: Usuario[] = []
  private collectionName : string = 'Usuario'

  constructor(private firestore: AngularFirestore) { }

  public getUsuario() : Usuario[]{
    return this.usuarios;
  };

  public inserirUsuario(nome: string, email: string, senha: string){
    let user: Usuario = {nome: nome, email: email, senha: senha};
    this.usuarios.push(user);
    this.addFireStore(user)
  } //inserindo no array de usuário

  public addFireStore (record: Usuario){
    return this.firestore.collection(this.collectionName).add(record)
  }

  public getFromFirestore(){
    return this.firestore.collection(this.collectionName).valueChanges({idField: 'id'})
  }

}

export interface Usuario{
  nome: string,
  email: string,
  senha: string
};