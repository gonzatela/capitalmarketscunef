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

## Historia

- `historia.html`: archivo por cursos académicos (septiembre–agosto), del más reciente al más antiguo. El curso 2026/27 es el actual; 2025/26, el anterior.
- `assets/css/history.css`: línea temporal responsive con los colores y tipografías del club.
- `assets/js/history.js`: progreso al hacer scroll y límite de cinco eventos por curso, con Mostrar más / Mostrar menos. Cada curso mantiene su propio estado. Sin JavaScript se muestran todos los eventos.
- Añadir los eventos dentro de `.history-events` con un ID único por curso. Las empresas van entre los líderes y los eventos y deben incluir todas las firmas documentadas de ese curso, sin duplicados.
- Historia confirmada por el usuario: Paula Esteban fundó el club en 2023/24 y lo dirigió hasta 2025/26; Miguel Martín García la apoyó únicamente en 2025/26. La foto de Miguel fue facilitada por el usuario. Falta el archivo de empresas/eventos de 2023/24 y 2024/25. El equipo de 2026/27 reproduce los cargos actuales de Equipo, excluyendo a la fundadora. No se han asignado a cursos actividades sin fecha o sin confirmación de celebración.

### Referencia React

El proyecto actual es HTML/CSS/JavaScript estático; la interfaz adjunta se ha adaptado a esa arquitectura. No necesita React ni framer-motion para ejecutarse. Los estilos compartidos están en `assets/css/styles.css`.

Para una futura versión React con TypeScript, Tailwind y shadcn, crear un proyecto separado con `npx shadcn@latest init` y elegir una plantilla React/TypeScript. Configurar el alias `@/*` al directorio fuente y el alias de UI de shadcn como `@/components/ui`; esta carpeta mantiene consistentes los imports del componente de referencia. Instalar `framer-motion` con `npm install framer-motion` y colocar el componente en `components/ui/timeline.tsx` dentro del directorio fuente. Esa migración requiere portar también las páginas y la navegación; no forma parte de esta adaptación estática.

Logos añadidos a Historia: Bloomberg (https://assets.bwbx.io/s3/navi/images/bloomberg_logo-2556aaa618.svg) y Magallanes (https://www.rankia.com/gestoras/magallanes-value-investors). Los demás reutilizan los archivos locales del club.
