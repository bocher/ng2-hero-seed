//根模块

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//支持表单双向绑定

import { HeroDetailComponent } from './hero-detail.component';

//引入app组件
import { AppComponent }   from './app.component';

@NgModule({
	imports:	  [
		BrowserModule,
		FormsModule
	],
	declarations: [ 
		AppComponent ,
		HeroDetailComponent
	],
	bootstrap:    [ 
		AppComponent 
	]
})

export class AppModule{}