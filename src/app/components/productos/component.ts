import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './component.html',
  styleUrls: ['./component.css']  
})

export class ProductosComponent {
  titulo = '🛍️ Lista de Productos';
  productos;

  constructor(private productosService: ProductosService) {
    this.productos = this.productosService.productos;
  }
}
