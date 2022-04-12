import { Component, OnInit } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private servicioFavorito: ServicioDeFavoritosService) { }
  public listaDeVideos:Array<any> = [];

  ngOnInit(): void {
    this.servicioFavorito.disparadorDeFavoritos.subscribe(data => {
      this.listaDeVideos.push(data);
    })
  }

}
