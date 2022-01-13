export interface Characters {
    info: InfoCharacters,
    results: Character[]
}

export interface InfoCharacters{
    count:number,
    pages:number,
    next:string,
    prev:string
}

export interface Character{
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
        name:string,
        url:string
    },
    location:{
        name:string,
        url:string
    },
    image:string,
    episode:string[],
    url:string,
    created:Date
}
