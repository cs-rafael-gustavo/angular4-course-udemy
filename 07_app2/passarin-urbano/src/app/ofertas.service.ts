import { Oferta } from "./components/shared/oferta.model";

export class OfertasService {
  public ofertas: Array<Oferta> = [
    {
      id: 1,
      categoria: "restaurante",
      titulo: "Super Burger",
      descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
      anunciante: "Original Burger",
      valor: 29.9,
      destaque: true,
      imagens: [
        { url: "/assets/img/ofertas/1/img1.jpg" },
        { url: "/assets/img/ofertas/1/img2.jpg" },
        { url: "/assets/img/ofertas/1/img3.jpg" },
        { url: "/assets/img/ofertas/1/img4.jpg" },
      ],
    },
    {
      id: 2,
      categoria: "restaurante",
      titulo: "Cozinha Mexicana",
      descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
      anunciante: "Mexicana",
      valor: 32.9,
      destaque: true,
      imagens: [
        { url: "/assets/img/ofertas/2/img1.jpg" },
        { url: "/assets/img/ofertas/2/img2.jpg" },
        { url: "/assets/img/ofertas/2/img3.jpg" },
        { url: "/assets/img/ofertas/2/img4.jpg" },
      ],
    },
    {
      id: 4,
      categoria: "diversao",
      titulo: "Estância das águas",
      descricao_oferta:
        "Diversão garantida com piscinas, trilhas e muito mais.",
      anunciante: "Estância das águas",
      valor: 31.9,
      destaque: true,
      imagens: [
        { url: "/assets/img/ofertas/3/img1.jpg" },
        { url: "/assets/img/ofertas/3/img2.jpg" },
        { url: "/assets/img/ofertas/3/img3.jpg" },
        { url: "/assets/img/ofertas/3/img4.jpg" },
        { url: "/assets/img/ofertas/3/img5.jpg" },
        { url: "/assets/img/ofertas/3/img6.jpg" },
      ],
    },
  ];

  public getOfertas(): Array<Oferta> {
    return this.ofertas;
  }

  public getOfertas2(): Promise<Array<Oferta>> {
    return new Promise((resolve, reject) => {
      let ok = true;
      if (ok) {
        setTimeout(() => {
          resolve(this.ofertas);
        }, 3000);
      } else {
        reject({
          codigo_erro: 404,
          mensagem_erro: "Servidor não encontrado de verdade",
        });
      }
    })
      .then((ofertas: Array<Oferta>) => {
        console.log("Primeiro then");
        return ofertas;
      })
      .then((ofertas: Array<Oferta>) => {
        console.log("Segundo then");
        return new Promise((resolve2, reject2) => {
          setTimeout(() => {
            resolve2(ofertas);
          }, 3000);
        });
      })
      .then((ofertas: Array<Oferta>) => {
        console.log(
          "Terceiro then executado após 3 segundos porque estava aguardando uma promise ser resolvida"
        );
        return ofertas;
      });
  }
}
