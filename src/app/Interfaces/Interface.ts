// Estructura del objeto con la información para las PELICULAS
export interface MovieResult {
        id : number
        original_title : string
        popularity : number
        poster_path : any
        release_date : string
}

// Estructura del objeto que contiene los PARAMETROS DE BUSQUEDA

export interface SearchMovieParams {
        sort_by : SortByOptions
        include_adult : boolean
        page : number
        // Filtrar por año
        primary_release_year: number
        // Filtrar por actores
        with_cast: string
        with_people: string
        // Filtrar por generos
        with_genres: string
        without_genres : string
}

enum SortByOptions {
        PopularityAsc = "pupularity.asc",
        PopularityDesc = "popularity.desc",
        ReleaseDateAsc = "release_date.asc",
        ReleaseDateDesc = "release_date.desc",
        OriginalTitleAsc = "original_title.asc",
        OriginalTitleDesc= "original_title.desc",
        VoteAverageAsc = "vote_average.asc",
        VoteAverageDesc = "vote_average.desc"
}

// Estructura del objeto que contiene los generos

export interface Geners {
        id : number
        name : string
}