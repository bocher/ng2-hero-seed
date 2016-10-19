//根组件

import { Component,OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';





@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls:['heroes.component.css']
})



export class HeroesComponent implements OnInit{

	heroes = [];
	selectedHero: Hero;
	
	constructor(
		private heroService:HeroService,
		private router:Router
	){};

	getHeroes():void{
		this.heroService.getHeroes()
			.then(heroes=>this.heroes=heroes);
	}

	ngOnInit():void{
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
	   this.selectedHero = hero;
	}

	gotoDetail(hero: Hero): void {
	  let link = ['/detail', hero.id];
	  this.router.navigate(link);
	}

	add(name:String):void{
		name=name.trim();
		if(!name){return;}
		this.heroService.create(name)
			.then(function(resp){
				console.log(resp);
			}) 
	}
}