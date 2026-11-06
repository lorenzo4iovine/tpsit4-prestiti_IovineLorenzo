import { Component, signal } from '@angular/core' ;
 import { RouterOutlet } from '@angular/router' ;
 import { Header } from './header/header' ;
 import { Footer } from './footer/footer' ;
 import { Home } from './home/home' ;

 @Componente ({
  import : [ RouterOutlet , Header , Footer , Home ] ,
  selettore : 'app-root' ,
  styleUrl : './app.css' ,
  templateUrl : './app.html' ,
 })
 esporta la classe App {
  protected readonly title = signal ( 'prestiti' );
 } 
