import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
 
  nombre = 'Duver';
  apellido = 'Melo';
  edad = 20;
  textRegister = 'No hay nadie registrado';
  //empresa = 'Trebol Colombia SAS';
  
  // getEdad(){
  // return this.edad;
  // }

  getUserRegistrado(){
  this.UserRegistrado = false;
  };

  setUserRegistrado(event:Event){
    // alert ('El usuario fue registrado');
    // this.textRegister = 'Se ha registrado el usuario';
    if((<HTMLInputElement>event.target).value == "si"){
      this.textRegister = 'Se ha registrado el usuario';
    }else{
      this.textRegister = 'No hay nadie registrado';
    }
  }

  habilitacionCuadro = false;

  UserRegistrado = false;

  constructor() { }

  ngOnInit(): void {
  }

}
