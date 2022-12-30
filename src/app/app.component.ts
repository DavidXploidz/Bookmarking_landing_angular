import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookmark_landingpage_tabs';

  public tab1: boolean = true;
  public tab2: boolean = false;
  public tab3: boolean = false;

  public activo: boolean = false;
  public show1: boolean = false;
  public show2: boolean = false;
  public show3: boolean = false;
  public show4: boolean = false;

  public menu: boolean = false;

  public correo: string = ''
  public vacio: boolean = false;

  tab(num: any){
    if(num === 1){
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      return;
    }
    if(num === 2){
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      return;
    }
    if(num === 3){
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      return;
    }
  }

  mostrarRespuesta(e: any){
    console.log(e);
    const pregunta = e.target.textContent;
    const preguntas = document.querySelectorAll('.pregunta__li')
    console.log(pregunta);
  }
  scroll(){
    document.body.classList.add('notScroll')
  }
  quitarScroll(){
    document.body.classList.remove('notScroll')
  }
  validarCorreo(){
    if(this.correo.includes('@')){
      console.log('Campo valido');
      this.vacio = false;
      return;
    }
    console.log('no valido');
    this.vacio = true;
  }
}
