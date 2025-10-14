import { Injectable, resource } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos = resource({
    loader: () => {
      return fetch('http://localhost:8080/api/productos')
        .then(res => {
          if (!res.ok) {
            throw new Error('Error al obtener productos');
          }
          return res.json();
        });
    }
  });
}
