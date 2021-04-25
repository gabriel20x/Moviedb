// Estructura del objeto con la información para las PELICULAS
export interface MovieResult {
        id : number
        original_title : string
        popularity : number
        poster_path : any
        release_date : string
}

// Estructura del objeto que contiene los PARAMETROS DE BUSQUEDA de PELICULAS

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

// Estructura del objeto con la información para las SERIES
export interface SeriesResult {
        id : number
        original_name : string
        popularity : number
        poster_path : any
        first_air_date : string
}

// Estructura del objeto que contiene los PARAMETROS DE BUSQUEDA de SERIES

export interface SearchSeriesParams {
        sort_by : SortByOptions
        page : number
        // Filtrar por año de primera temporada
        firts_air_date_year: number
        // Filtrar por generos
        with_genres: string
        without_genres : string
}
// Opciones de filtrado para Peliculas y Series
enum SortByOptions {
        PopularityAsc = "pupularity.asc",
        PopularityDesc = "popularity.desc",
        ReleaseDateAsc = "release_date.asc",
        ReleaseDateDesc = "release_date.desc",
        OriginalTitleAsc = "original_title.asc",
        OriginalTitleDesc= "original_title.desc",
        VoteAverageAsc = "vote_average.asc",
        VoteAverageDesc = "vote_average.desc",
        FirstAirDateAsc = "first_air_date.asc",
        FirstAirDateDesc = "first_air_date.desc"
}
// Estructura del objeto que contiene los generos

export interface Genres {
        id : number
        name : string
}

// Estructura para el filtro del menu

export interface MenuFilter{
        id : number
        name: string
        media_type: string
}

