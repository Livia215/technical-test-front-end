interface GenreContent {
  id: number;
  name: string;
}

export interface FilmContent {
  id: number;
  title: string;
  poster_path: string;
  genres: GenreContent[];
  overview: string;
  tagline: string;
  revenue: number;
  release_date: string;
}

export interface FilmAPI {
  id: number;
  title: string;
  poster_path: string;
}
