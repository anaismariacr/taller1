export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    descripcion: string;
    link: string;
    foto: string;
  
    constructor(
      id: number,
      name: string,
      channel: string,
      seasons: number,
      descripcion: string,
      link: string,
      foto: string
    ) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.descripcion = descripcion;
      this.link = link;
      this.foto = foto;
    }
  }