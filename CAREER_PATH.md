# Capital Markets Career Path

Implementación local revisada el 18 de noviembre de 2026. No requiere compilación ni dependencias nuevas.

## Páginas y mantenimiento

- `career-path.html`: portada y secuencia 01 → 02 → 03 → 04.
- `career-path-01-empleo.html`: objetivo profesional, portales y seguimiento.
- `career-path-02-candidatura.html`: CV, logros, carta, recomendación y LinkedIn.
- `career-path-03-entrevistas.html`: proceso de preparación y guías con indicación de los sectores a los que se dirigen.
- `career-path-04-incorporacion.html`: condiciones de la oferta, formalización con CUNEF, seguimiento y cierre.
- `assets/css/career-path.css`: estilos acotados al itinerario y su acceso en Formación.
- `assets/downloads/career-path/`: dos plantillas DOCX y, en `fichas/`, seis PDF sectoriales de CUNEF, copiados sin modificar según la solicitud del usuario. No se les atribuye una licencia abierta.

Las páginas presentan los pasos formativos en HTML y enlazan las plantillas y fichas descargables. No dependen de JavaScript para leerlos, navegar, descargar archivos, abrir recursos o marcar las listas. Las casillas no persisten el progreso.

Explorar conserva su implementación en `assets/js/main.js`. Los cuatro registros usan `type: 'career-path'` y `module: 1/2/3/4`. Se incluyen también bajo Recursos. El enlace `explorar.html?tipo=career-path` preselecciona la categoría. Los módulos conservan su orden numérico y son transversales a los sectores: no se asignan mediante la heurística de títulos que utiliza el resto del catálogo. Búsqueda y filtros se combinan con AND; un módulo transversal cumple cualquier sector.

Formación incorpora el acceso antes de los recursos técnicos gratuitos, dentro de la misma sección. Se conserva el orden de las secciones de la home. La carpeta 04 y su integración no se han editado.

En la home, el itinerario utiliza exactamente los componentes de los recursos contiguos: section-title, section-sub, fuentes-mercado-grid, fuentes-mercado-grupo y fuente-enlace, con la misma estructura de encabezado, lista, enlace y descripción. No se aplican tamaños, colores ni columnas específicos a las tarjetas del itinerario. Se mantiene únicamente el espaciado entre el acceso al itinerario y los recursos técnicos.

## Revisión de los materiales de origen

Los doce archivos de las carpetas 01–03 se han abierto y extraído para revisión. Los originales permanecen en sus carpetas. Las extracciones temporales y los PDF originales no se incorporan al repositorio.

| Material | Decisión de integración |
| --- | --- |
| Trackr y Forged Finance | Enlaces actuales con instrucciones de selección y verificación en la web del empleador. No se publica una copia del DOCX. |
| Guía de CV | Pasos en HTML sobre estructura, adaptación y logros verificables. |
| Plantillas CV español e inglés | Copias de los DOCX aportados, sin alterar contenido. Se explica cómo elegir entre versión estudiante/profesional y retirar instrucciones. No se presupone una licencia para otros usos. |
| Ejemplo de CV comentado | Revisión del contenido y de la imagen del CV. Sin autorización de redistribución identificada: se sustituye por un ejemplo original ficticio y un método de revisión sin colores decorativos. |
| CV de Wharton | 355 páginas de perfiles MBA, principalmente promoción de 2003; contiene datos personales. No consta autorización de republicación. Se explican aprendizajes generales y se enlazan ejemplos oficiales actuales de grado de Penn. |
| Verbos de acción español/inglés | Selección original revisada en HTML. Se corrige la traducción de `authored` y se evita publicar el listado íntegro como si fuera una recomendación actual de Harvard. |
| Carta de motivación | Estructura y ejemplo de redacción original en HTML. |
| Recomendación | Proceso y modelo original de solicitud, desplegable y seleccionable. |
| LinkedIn antiguo | Sustituido por orientación actual con enlaces oficiales. Eliminada la instrucción de activar Creator Mode y matizada la recomendación de activar siempre Open to Work. |
| AskIvy 2011–12 | 71 páginas. Aviso de derechos en página 2 que restringe copia y distribución no autorizadas. No se aloja ni enlaza una copia de terceros. Retirada también la ficha informativa del módulo 03 por solicitud del usuario. |
| The Red Book 2020 | 285 páginas. Página 2: reproducción, almacenamiento o transmisión sujetos a permiso escrito previo. No se aloja el PDF. Se enlaza la página actual del editor y sus materiales gratuitos, distinguiendo la edición histórica. |

El módulo 03 describe un proceso de preparación, sin ejemplos ni ejercicios. Las guías se presentan indicando su alcance sectorial y antigüedad. Se enlaza la muestra PDF oficial de The Red Book (edición 2021), además del acceso completo de pago del editor; no se aloja el manual completo.

## Fuentes vigentes y condiciones

- [Trackr: selector de trackers](https://the-trackr.com/trackers/).
- [Forged Finance](https://www.theforgedfinance.com/) y [planes](https://www.theforgedfinance.com/pricing): la interfaz se comprobó en navegador; no se fijan precios en la web del club.
- [JPMorganChase: programas](https://www.jpmorganchase.com/careers/explore-opportunities/programs) y [Goldman Sachs: estudiantes](https://www.goldmansachs.com/careers/students): ejemplos de fuentes primarias, no vacantes concretas garantizadas.
- La nota histórica sobre Creator Mode se ha retirado de la interfaz por solicitud del usuario.
- [LinkedIn: Open to Work](https://www.linkedin.com/help/linkedin/answer/a507508/): visibilidad y límites de privacidad.
- [LinkedIn: guía de búsqueda](https://www.linkedin.com/jobsearchguide/): perfil, alertas y seguimiento.
- [Penn: CV](https://careerservices.upenn.edu/channels/resume/) y [ejemplos de grado](https://careerservices.upenn.edu/preparing-effective-resumes/undergraduates-student-resume-samples/).
- [The Red Book: muestra PDF oficial](https://wsp-pdf-ebook.s3.amazonaws.com/WSP_RedBook_Sample.pdf), edición 2021, disponible desde la página del editor; enlazada externamente.
- [The Red Book: página oficial](https://www.wallstreetprep.com/self-study-programs/the-red-book/) y [términos del editor](https://www.wallstreetprep.com/trust-center/terms/), artículo 4.1: restricciones de distribución y alojamiento de materiales.
- [Wall Street Prep: recursos gratuitos](https://www.wallstreetprep.com/free-resources/), [entrevistas](https://www.wallstreetprep.com/topics/interview-prep/) y [CFI: recursos](https://corporatefinanceinstitute.com/resources/).

En la verificación inicial, las 15 URL externas de contenido devolvieron HTTP 200. La ampliación de portales se detalla a continuación. La revisión comprueba disponibilidad, no garantiza disponibilidad futura de ofertas, condiciones o acceso tras iniciar sesión. Las funciones de pago se identifican sin prometer acceso gratuito.

## Ampliación de portales de empleo

El Paso 2 destaca [CUNEF Careers · alumnos](https://careers.cunef.edu/login/alumnos) y el [Foro de Empleo de CUNEF](https://www.cunef.edu/foro-de-empleo-2026/). [Iberprax](https://iberprax.es/), Trackr y Forged Finance están distribuidos entre las categorías existentes. No se ha iniciado sesión ni se han inspeccionado ofertas privadas de CUNEF.

Todos los demás canales se ordenan en categorías del Paso 2. Se mantiene FTI Consulting entre los ejemplos de empleadores con portal propio. Los nombres de los recursos se incluyen en las palabras de búsqueda del módulo en Explorar.

| Elementos de la lista aportada | Tratamiento |
| --- | --- |
| LinkedIn, Indeed, Glassdoor, Welcome to the Jungle, CareerBuilder | Portales generalistas; se indica la necesidad de filtrar por país, experiencia y función. CareerBuilder se presenta para EE. UU. |
| Bright Network, TARGETjobs, Gradcracker, JobTeaser, Handshake, Prosple | Portales para primeros empleos. Gradcracker se identifica como STEM; se matizan geografía y acceso institucional. |
| GradConnection, SEEK, JobsDB, JobStreet | Recursos regionales. GradConnection Australia redirige actualmente a SEEK Graduates; se enlaza el destino vigente. JobsDB se enlaza a Hong Kong y JobStreet a Singapur, indicando la selección de otros mercados. |
| American Economist Association/JOE, Econ Job Market | Se corrige el nombre a American Economic Association y se sitúan en economía/investigación, con advertencia sobre titulaciones avanzadas. |
| 12twenty, Symplicity, University Job Board | Se explica el acceso por institución. No se presupone relación de CUNEF con ninguno de los proveedores. University Job Board se concreta con el portal de CUNEF, sin inventar otro enlace. |
| ALPFA, Forté, National Black MBA Association, Out4Undergrad, SEO London, Social Mobility Foundation | Programas/redes, con enlaces oficiales y revisión de sus condiciones. Out4Undergrad se normaliza a Out for Undergrad (O4U). No se asume que cualquier alumno cumpla criterios de participación. |
| Proud Employers | Bolsa de empleo separada del nombre Mogul con el que aparecía concatenada. |
| FTI Consulting Careers Website, Our Website | FTI se enlaza a su página oficial de early careers; Our Website es una etiqueta genérica del formulario, no un portal independiente. |
| Direct Contact, Professional Networking, Recruiter Contacted Me, Career Fair, Employer Presentation, Student Organization | No se crea una categoría para eventos, alumni y contactos; se elimina conforme a la última indicación del usuario. |
| Job Board, Professional Association, Social Network, University Recruiting | Encabezados o categorías del formulario; no se crean recursos con esos nombres. |
| Facebook, Google, Instagram, X | No se listan como bolsas especializadas. |
| Mogul | La oferta actual revisada destaca oportunidades ejecutivas; se omite de esta selección de prácticas y primeros empleos. |
| Lesbians who Tech, Taylor Bennett Foundation, Out & Equal, We Are The City | Se omiten de esta selección: tecnología, comunicación/relaciones públicas o redes y programas de inclusión/desarrollo más amplios. No se afirma que carezcan de utilidad profesional; no son las fuentes prioritarias para este paso de búsqueda financiera de grado. |

Se han abierto fuentes oficiales para comprobar el propósito y alcance de los recursos incluidos. La comprobación HTTP directa del módulo 01 cubrió 35 URL de contenido: 26 devolvieron 200 y 9 respondieron con protecciones anti automatización (403: Indeed, Glassdoor, CareerBuilder, Bright Network, Gradcracker, Prosple, SEEK, JobsDB y JobStreet). Sus páginas oficiales se pudieron consultar mediante la herramienta web. CUNEF e Iberprax respondieron 200. No se eludieron controles ni se validó el contenido tras registro.

Fuentes para decisiones de selección: [SEEK Graduates](https://au.seek.com/graduates), [Econ Job Market](https://econjobmarket.org/), [Gradcracker](https://www.gradcracker.com/), [12twenty: acceso](https://12twenty.zendesk.com/hc/en-us/articles/4413533596563-How-To-Log-In-to-the-Platform), [Symplicity: estudiantes](https://www.symplicity.com/en-us/symplicity-jobs-and-careers-symplicity), [SEO London: requisitos](https://www.seo-london.org/register), [Mogul: oferta ejecutiva](https://onmogul.com/workplaces) y [Taylor Bennett: programas de comunicación](https://www.taylorbennettfoundation.org/programmes/).

## Fichas sectoriales de CUNEF y guía internacional

Las fichas se ofrecen como descargas, conforme a la corrección expresa del usuario. En «Define dónde quieres empezar» se explica que contienen puestos, funciones y empresas del sector. Los seis PDF son copias íntegras de los archivos aportados; conservan su contenido y atribución. No se les atribuye una licencia abierta ni se han modificado los originales.

| Ficha | Archivo de descarga |
| --- | --- |
| Banca de inversión | assets/downloads/career-path/fichas/ficha-banca-inversion.pdf |
| Servicios financieros diversificados | assets/downloads/career-path/fichas/ficha-servicios-financieros.pdf |
| Consultoría | assets/downloads/career-path/fichas/ficha-consultoria.pdf |
| Empresas de auditoría | assets/downloads/career-path/fichas/ficha-auditoria.pdf |
| Inmobiliaria | assets/downloads/career-path/fichas/ficha-inmobiliaria.pdf |
| Seguros | assets/downloads/career-path/fichas/ficha-seguros.pdf |

Se han eliminado de los tres módulos las síntesis, competencias, evidencias y ejercicios derivados de las fichas. El contenido de cada ficha se consulta dentro del PDF. La integración de la guía internacional se mantiene por separado, sin descarga ni información de la ayuda excluida.

En el Paso 2, un bloque compacto destaca la aplicación directa a la empresa y, en una fila con el logo de CUNEF, el portal de alumnos y el Foro de Empleo 2026. No se presenta el foro como convocatoria futura abierta. Los demás canales se distribuyen en siete categorías: generalistas; estudiantes y recién graduados; mercados de Europa, Asia y Oceanía; economía e investigación; plataformas universitarias; redes y programas; prácticas internacionales. Iberprax está en generalistas, Trackr en estudiantes y Forged Finance en mercados. Se eliminan las categorías de Finanzas, Webs de empresas y Eventos, alumni y contactos. Se retiran también los ejemplos de firmas del bloque prioritario. Se conservan los canales verificables de las fichas, salvo South Summit al eliminar el grupo de eventos.

La segunda ruta facilitada no resolvía a un archivo existente. Se localizó el documento que corresponde a su nombre y contenido en `Careers CUNEF - Recursos/Recursos para la búsqueda de prácticas y empleo/INTERNATIONAL INTERNSHIPS A PRACTICAL GUIDE & USEFUL RESOURCES.pdf` (12 páginas).

| Parte de la guía internacional | Integración |
| --- | --- |
| Essentials y plan de acción, pp. 2–3 | Se retira del módulo 01 el desplegable «Si buscas fuera de España». Se mantiene la orientación de candidatura e entrevista en los módulos 02 y 03 y las comprobaciones de incorporación del módulo 04. |
| Canales y directorio, pp. 4–6 | Desplegable de prácticas internacionales con una selección de portales y organizaciones relevante para la búsqueda. Se actualiza Banco Mundial al destino WBG Pioneers y la ruta del BCE. |
| Curriculares/extracurriculares y calendario, pp. 7–8 | Módulo 04: diferencias, compatibilidad con estudios y confirmación de matrícula, horas, créditos, evaluaciones y fechas. No se fijan cantidades como reglas generales: la guía muestra cargas de 300 h/12 ECTS y 150 h/6 ECTS según el caso. |
| Documentación y preguntas, pp. 9–10 | Módulo 04: comunicación a CUNEF, alta de la entidad, convenio/anexo previo, tutores, seguros, documentación personal, cambios y validación de modalidades remotas o contratos. |
| Erasmus+ traineeship grant, p. 11 | Excluida por instrucción expresa del usuario. Tampoco se trasladan las referencias a elegibilidad o compatibilidad de esa ayuda que aparecen en las pp. 2 y 10. |
| Checklist, p. 12 | Comprobaciones de oferta, calendario, presupuesto, permisos, documentación, responsables y evaluación. Las listas finales de los cuatro módulos incorporan los resultados correspondientes. |

No se publica la guía como descarga. Los detalles administrativos se remiten a CUNEF y a las condiciones del destino; no se presentan como asesoramiento individual de visados o normativa laboral. Se utiliza la página pública de [Carreras y Empleo de CUNEF](https://www.cunef.edu/experiencia-cunef/carreras-y-empleo/) como punto institucional estable en lugar de publicar correos personales de la guía.

Directorio internacional: EURES, Portal Europeo de la Juventud, Eurodesk, EuroBrussels, BCE, OCDE, Banco Mundial, AIESEC, IAESTE, Recruiting Erasmus, GoinGlobal, Eurodyssey, Business France y English Jobs. Se priorizan fuentes oficiales, perfil financiero y acceso verificable; los directorios genéricos o agencias locales del documento no se trasladan íntegramente. No se garantizan vacantes, acceso gratuito, reconocimiento académico ni elegibilidad.

Los quince destinos nuevos (incluida la página institucional de CUNEF) se comprobaron: catorce devolvieron HTTP 200; OCDE respondió 403 a la comprobación automática, y su página oficial se consultó con la herramienta web. El contenido no incluye condiciones de la ayuda Erasmus+.

`revealCareerAnchor` abre el grupo de recursos al que apunta un fragmento, por ejemplo el directorio internacional. Las páginas conservan contenido y descargas accesibles sin JavaScript.

## Verificación

- `node --check assets/js/main.js` y `git diff --check`.
- 221 referencias locales en las cinco páginas, incluidos archivos y anclas: sin destinos ausentes ni IDs duplicados tras convertir las fichas en descargas y ordenar los canales.
- Las dos plantillas responden HTTP 200 con tipo DOCX y firma ZIP. Las seis fichas responden HTTP 200 con tipo PDF. En los ocho casos, los bytes coinciden con los archivos locales y originales.
- SHA-256 español: `06a59333e9c1934224f6463ad8454f44141875a4e0788ad3151212e7e00c255d`.
- SHA-256 inglés: `64b7451588bcbeb3eee04aee8bf51af66f06636fcc5dbc5c2868cd31c709b17f`.
- Navegador: categoría Career Path, inclusión bajo Recursos, búsqueda «LinkedIn», estado vacío, combinación con sector y navegación entre módulos.
- Revisión visual en escritorio (1440 px), tablet (768 px) y móvil (390 y 320 px), sin desbordamiento horizontal del contenido. La tabla de verbos dispone de desplazamiento propio y foco de teclado en pantallas estrechas. Se probaron las casillas y los recursos desplegables.
- Fichas: verificadas seis descargas y su ubicación en el Paso 1. No se integran sus competencias ni resúmenes. Revisión actual a 320 px: desplegable de estudiantes con Trackr, cuatro módulos ordenados en Explorar y navegación al módulo 04, sin desbordamiento horizontal. Bloque prioritario compacto comprobado a 1440 px, con logo de CUNEF.
- Módulo 02: retirada de la nota sobre redistribución de CV y del aviso de Creator Mode; Paso 3 titulado Carta de motivación. Módulo 01: sin botón de la guía LinkedIn. Módulo 03: sin ejemplos ni ejercicios; muestra oficial y enlace al editor de The Red Book.
- Las comprobaciones de descargas, tablet y filtros combinados corresponden a la validación inicial; la revisión final añade el cuarto módulo y comprueba su presencia en Explorar y navegación móvil.
- Los dieciocho PDF sectoriales y la guía internacional coinciden en SHA-256 con las huellas tomadas antes de editar la web. Se mantienen dos descargas DOCX y se añaden seis PDF sectoriales idénticos a sus originales. La guía internacional no se ofrece en descarga ni se incorpora el contenido de la ayuda excluida.
- Las descargas se verificaron por HTTP y contenido binario; el navegador de pruebas no notificó el evento de descarga al pulsar el enlace.

Para revisar en local, ejecutar el servidor descrito en README y abrir `/career-path.html`, `/explorar.html?tipo=career-path` e `/index.html#formacion`.

## Hoja de candidaturas del club

Se publica el archivo aportado por el usuario el 18 de noviembre de 2026, Capital Markets Division - Registro de Candidaturas.xlsx, en assets/downloads/career-path/registro-candidaturas-capital-markets-division.xlsx. Se sustituye la plantilla generada anteriormente. Copia binaria sin modificaciones, manteniendo las dos hojas, las tablas, las fórmulas, el formato, los registros y las imágenes originales. SHA-256: 26c8aa730d70f83c921cd54b1be2555a2751726cad2f035e32696d994ed198e0.

La tabla de candidaturas contiene categoría, compañía, estado de documentos, candidatura y oferta, programa, enlace, ubicación, proceso y notas. Se conserva la guía de bienvenida y configuración. El archivo no contiene macros ni conexiones externas. El enlace del Paso 3 descarga el libro con su nombre original. Se actualiza la captura con la imagen facilitada junto al nuevo archivo, sin modificarla.

## Imágenes, logos y acceso desde el hero

El hero incorpora «Carrera Profesional» con ancla a `#career-home-title`. El título mantiene un margen de desplazamiento que permite verlo bajo la navegación fija. Se retiran los ejemplos de empresas del bloque de aplicación directa y su referencia en las palabras de búsqueda de Explorar.

Los 54 canales de reclutamiento se presentan por categorías, con 53 imágenes de marca y texto cuando el símbolo no identifica por sí solo el recurso. InternshipFinder conserva el nombre al no haberse encontrado un logo verificable y legible. Se reutiliza `fuente-logo`: escala de grises en reposo, color y desplazamiento al pasar el cursor o enfocar con teclado; se respeta la preferencia de movimiento reducido. Los wordmarks blancos conservan contraste mediante un tratamiento monocromo. Las fuentes y archivos se documentan en `assets/img/career-path/SOURCES.md`.

Imágenes locales: foto oficial del Foro de Empleo de CUNEF de octubre de 2026; captura del Excel aportada por el usuario (copia idéntica); primera página de la plantilla española exportada a PDF con Word y renderizada sin modificar el DOCX; ilustración de perfil y publicación de LinkedIn aportada por el usuario; ilustración SVG original para el proceso de entrevistas. Los títulos indicados de los módulos 02 y 04 utilizan los logos de LinkedIn y CUNEF con texto alternativo. Las vistas del CV y Excel permiten abrir la imagen ampliada.

Las secciones con imágenes usan texto y figura en columnas en escritorio y se apilan a partir de 850 px. Verificación visual a 1440 y 320 px en los cuatro módulos, ancla del hero comprobada y sin desbordamiento horizontal. Validación estática final de home y las cinco páginas del itinerario: 377 referencias locales a archivos y anclas, sin destinos ausentes ni IDs duplicados. La captura aportada y la integrada coinciden en bytes; el DOCX español conserva su SHA-256 original.

## Revisión previa a publicación

El usuario autoriza expresamente el push tras sustituir Excel e imágenes y unificar los bloques de la home. Se verifica Trackr y se amplía su descripción con los detalles de las posiciones: apertura/cierre, requisitos y etapas de selección cuando estén disponibles. Antes del push se comprueba la igualdad binaria del libro y las dos imágenes con los archivos aportados, los enlaces locales, las descargas HTTP y la presentación móvil y de escritorio.
