interface Livre {
  id: string;
  categories: string[];
  titre: string;
  description: string;
  tomes: number;
  imageUrl: string;
  enCours: boolean;
}

export default Livre;
