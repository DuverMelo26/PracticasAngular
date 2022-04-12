import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pruebita-app';
  public ListaDeVideos:any = []

  constructor(private RestService: RestService){

  }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.RestService.get(`http://localhost:4200/post`)
    .subscribe(respuesta => {
      this.ListaDeVideos = respuesta;
    })
  }
}
