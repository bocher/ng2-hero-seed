import { Component,OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';


@Component({
	moduleId:module.id,
	selector:'my-dashboard',
	templateUrl:'dashboard.component.html',
	styleUrls:['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
	heroes = [];

	constructor(
		private heroService:HeroService,
		private router:Router
		){};

	getHeroes():void{
		this.heroService.getHeroes()
			.then(heroes=>this.heroes=heroes.slice(1,5))
	}

	gotoDetail(hero: Hero): void {
	  let link = ['/detail', hero.id];
	  this.router.navigate(link);
	}

	ngOnInit():void{
		this.getHeroes();
	}
 }
