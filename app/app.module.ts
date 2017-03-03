//根模块

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';//支持表单双向绑定
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';





@NgModule({
	imports:	  [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	declarations: [ 
		AppComponent ,

	],
	bootstrap:    [ 
		AppComponent 
	]
})

export class AppModule{}