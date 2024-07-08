import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { opcionesIDs } from './models/idsDisponiblesTypes.interface';
import { PokemonFromType, PokemonElement, PokeType, Result } from './models/poketypo.interface';
import { UrlType } from './models/urlType.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  base_urlPokemon = 'https://pokeapi.co/api/v2/'
  http = inject(HttpClient);
  pokemonListSub$: Subject<any> = new Subject();

  // getData(url: string): Observable<any> {
  //   return this.http.get<any>(url).pipe(
  //     map((res => res.results)),
  //     tap(re => {
  //       console.log(re);
  //       this.cambiaFilas([...re])
  //     })
  //   )
  // }
  buildEndpointFromComponentID(idComponent: opcionesIDs, complementos: string[], paramsMap?: Map<string, string>) {
    let url = '';
    console.log('complementos', complementos)
    let path: string = complementos.join('/');
    let params = new HttpParams();
    if (paramsMap) {
      for (var [key, value] of paramsMap) {
        console.log(key + " = " + value);
        params = params.append(key, value)
      }
    }
    console.log({path})
    switch (idComponent) {

      case 'selectTipoPokemon':
        url = `${this.base_urlPokemon}${path}`
        break;

      case 'tablaPokemonbyType':
        url = `${this.base_urlPokemon}${path}`
        break;


      default:
        break;
    }
    return { url, params }
  }


  getDataFromID<T>(buildUrl: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(buildUrl, { params });
  }
  getDataFromID2<T>(objetoUrl:UrlType): Observable<T> {
    return this.http.get<T>(objetoUrl.url, { params: objetoUrl.params });
  }

  getPokemonByType(type: string) {
    return this.http.get<PokemonFromType>(`${this.base_urlPokemon}type/${type}`).pipe(map(response => {
      console.log('getpokemonbytype', response)
      // this.cambiaFilas([...response.pokemon.map((poke:any)=> poke.pokemon)])
      return response.pokemon.map((elemento: PokemonElement) => elemento.pokemon);
    }))
  }
  getPokeTypes() {
    return this.http.get<PokeType>(`${this.base_urlPokemon}type`)
      .pipe(
        map(res => res.results.map((type: Result) => type.name))
      )
  }
  filasTabla = signal<any>({});
  // cambiaFilas(listaPokemon: any[]) {
  //   let c: any[] = [];
  //   console.log('cambiando filas:',listaPokemon)
  //   this.filasTabla.set(listaPokemon)
  //   this.pokemonListSub$.next(listaPokemon)
  // }


}
