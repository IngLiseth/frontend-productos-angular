import { Injectable, resource } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos = resource({
    loader: () => {
      return fetch('https://api-productos-springboot-uhyz.onrender.com/api/productos')
        .then(res => {
          if (!res.ok) {
            throw new Error('Error al obtener productos');
          }
          return res.json();
        });
    }
  });
}
