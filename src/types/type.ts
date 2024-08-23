
export interface AllPokemon {
    name: string,
    url:string,
}

export type PokemoneUrl = Array<AllPokemon>

type statsType = {
    base_stat : number,
    effort : number,
    stat : AllPokemon
    }
    
interface TypesType {
        slot:number,
        type: AllPokemon
 }


export interface pokemonData{
    id: number
    forms : Array<AllPokemon>
    abilities: PokemoneUrl
    species : AllPokemon
    stats: Array<statsType>
    weight: number
    height:number
    types: Array<TypesType>
    imgShinny:string,
    imgDefalut:string
    moves: Array<AllPokemon>
}

export type AllPokemonData = Array<pokemonData> 




