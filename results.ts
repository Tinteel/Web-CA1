export interface MovieDetails
{
    imdbID?: string;
    Title?: string;
    Year?: string;
    Director?: string;
    Poster?: string;
    Response: string;
    Error?: string;
    imdbRating?:string;
}

export interface SearchResults
{
    Search: MovieResults[];
    totalResults?: string;
    Response: string;
    Error?: string;
}

export interface MovieResults
{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}