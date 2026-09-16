* Catálogo de Videojuegos

* Descripción

el Catálogo de Videojuegos es una aplicación móvil desarrollada con React Native y Expo.

La aplicación permite visualizar un catálogo de videojuegos con información básica de cada uno, incluyendo su título, género, plataformas disponibles e imagen.


* Integrante

- Lafuria Emiliano

*Tecnologías utilizadas

- React Native
- Expo
- TypeScript
- Styled Components

* Features previstas

 Feature                                                 Estado 

ver catalogo de  videojuegos                          implementado
Filtrar videojuegos por género                        en desarrollo
ver  el detalle de un videojuego                      implementado
Buscar videojuego                                     Pendiente 

* Estado actual 

En la primera versión se implementó:

- Pantalla principal relacionada con la temática de videojuegos.
- Listado de videojuegos con datos estáticos.
- Uso de View.
- Uso de Text.
- Uso de Image.
- Uso de ScrollView.
- Componente reutilizable *TarjetaDeVideojuego*.
- Comunicación entre componentes mediante props.
- Imágenes locales para representar cada videojuego.


En la segunda versión se implementó:


- Se reemplazó ScrollView por FlatList para mostrar el catálogo.
- Se agregó una barra de categorías.
- Las categorías son táctiles mediante TouchableOpacity.
- Se utiliza useState para indicar la categoría seleccionada.
- Se agregó un indicador visual `●` para mostrar la categoría actual.
- Se agregó el botón *Ver detalle* en cada videojuego.
- Se creó una pantalla de detalle.
- El botón *Ver detalle* permite navegar hacia la información del videojuego seleccionado.

* Datos 

Actualmente cada videojuego contiene:

- Título.
- Género.
- Categoría.
- Plataformas disponibles.
- Año.
- Desarrollador.
- Imagen.

