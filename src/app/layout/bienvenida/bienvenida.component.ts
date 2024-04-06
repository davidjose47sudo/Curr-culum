import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenida',
  standalone: false,
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent implements OnInit {
  idiomaNavegador: string = "es";

  constructor() {
  }

  ngOnInit(): void {
    // Este método se ejecuta automáticamente cuando el componente se inicia
    if (typeof window !== 'undefined') {
      this.idiomaNavegador = navigator.language || navigator.languages[0]; // Se obtiene el idioma del navegador
      console.log('Idioma del navegador:', this.idiomaNavegador.substring(0, 2));
    }

  }

  public codeinfo = `{
    return 'Hello, ' + name + '!';
  }`;


}
