import { Component, OnInit, Input } from '@angular/core';
import { ServicioDeFavoritosService } from '../servicio-de-favoritos.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() dataEntrante:any;
  public image!:string;
  constructor(private servicioFavorito: ServicioDeFavoritosService) { }

  ngOnInit(): void {
    this.image = 'https://i.ytimg.com/vi/wEINlbIcVS0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAGEEcua6GbmxKVraAmSBXLEmqaIw'
  }

  AgregarFavorito(){
    this.servicioFavorito.disparadorDeFavoritos.emit({
      data:this.dataEntrante
    })
  }
}
