//根模块

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//支持表单双向绑定
import { HttpModule } from '@angular/http';


import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';

import { AppRoutingModule }     from './app-routing.module';




@NgModule({
	imports:	  [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	declarations: [ 
		AppComponent ,
		HeroDetailComponent,
		HeroesComponent,
		DashboardComponent
	],
	providers:    [
		HeroService
	],
	bootstrap:    [ 
		AppComponent 
	]
})

export class AppModule{}