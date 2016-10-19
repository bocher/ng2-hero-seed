import { Injectable } from '@angular/core';
import { Hero } from './hero';

import { Headers,Http,URLSearchParams } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService{
	baseUrl='http://localhost:8088';
	private headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
	constructor(private http:Http){}
	getHeroes(): Promise<Hero[]> {
	    return this.http.get(this.baseUrl+'/gethero')
	               .toPromise()
	               .then(response => response.json().data as Hero[])
	               .catch(this.handleError);
	  }
	getHero(id:number):Promise<Hero>{
		let params = new URLSearchParams();
		params.append('id', id);
		return this.http.get(
			this.baseUrl+'/getheroById?'+params.toString())
	               .toPromise()
	               .then(res => res.json().data);
	};

	create(name):Promise<Hero>{
		return this.http.post(
			this.baseUrl+'/createhero',
			JSON.stringify({name:name}), 
			{headers: this.headers}
			)
		.toPromise()
		.then(res => res.json().data)
    	.catch(this.handleError);
	}

	update(hero:Hero):Promise<Hero>{
		return this.http.put(
			this.baseUrl+'/updatehero',
			JSON.stringify(hero),
			{headers:this.headers}
			)
		.toPromise()
		.then(()=>hero)
		.catch(this.handleError);
	}

	delete(hero:Hero):Promise<Hero>{
		return this.http.delete(
			this.baseUrl+'/deletehero?id='+hero.id,
			{headers:this.headers}
			)
		.toPromise()
		.then(()=>hero)
		.catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}