
export interface AllPokemon {
    name: string,
    url:string,
    Data: object | undefined
}

export type PokemoneUrl = Array<AllPokemon>

type statsType = {
    base_stat : number,
    effort : number,
    stat : AllPokemon
    }
    
interface TypesType {
        slot:number,
        type: Array<AllPokemon>
 }

export interface pokemonData{
    id: number
    forms : AllPokemon
    abilities: PokemoneUrl
    species : PokemoneUrl
    stats: Array<statsType>
    weight: number
    height:number
    types: Array<TypesType>
    imgShinny:string,
    imgDefalut:string
}

export type AllPokemonData = Array<pokemonData> 




