# Club Capital Markets CUNEF

Web estatica del Club Capital Markets de CUNEF.

## Estructura

- `index.html`: pagina principal.
- `assets/css/styles.css`: estilos globales.
- `assets/js/main.js`: ticker, filtros de Explorar, newsletter y modales.
- `assets/img/`: imagenes usadas por la web.
- `legacy/`: copia de respaldo del HTML monolitico original.

## Ejecutar en local

Desde esta carpeta:

```bash
npx --yes http-server . -p 8765 -a 127.0.0.1 -c-1
```

Despues abre:

```text
http://127.0.0.1:8765/
```
