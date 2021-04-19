export interface movie_result {
    [index: number]:{
        id : number
        original_title : string
        popularity : number
        poster_path : any
        release_date : string
    }
}

// export interface movies_result extends Array<movie_result>{}