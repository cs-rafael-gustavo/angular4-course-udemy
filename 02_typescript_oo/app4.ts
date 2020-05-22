import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";
import { Dao } from "./Dao";
// import { ConcessionariaDao } from "./ConcessionariaDao";
// import { PessoaDao } from "./PessoaDao";

// let concessionariaDao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria("", []);

// let pessoaDao: PessoaDao = new PessoaDao();
let pessoa = new Pessoa("", "");

let concessionariaDao: Dao<Concessionaria> = new Dao<Concessionaria>();
let pessoaDao: Dao<Pessoa> = new Dao<Pessoa>();

concessionariaDao.remover(1);
pessoaDao.remover(2);
