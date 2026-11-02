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
- zustan
- jest
- react native testing library


* Features previstas

 Feature                                                 Estado 

ver catalogo de  videojuegos                          implementado
Filtrar videojuegos por género                        implementado
ver  el detalle de un videojuego                      implementado
Buscar videojuego                                     implementado

* Estado actual 

En la 1 versión se implementó:

- Pantalla principal relacionada con la temática de videojuegos.
- Listado de videojuegos con datos estáticos.
- Uso de View.
- Uso de Text.
- Uso de Image.
- Uso de ScrollView.
- Componente reutilizable *TarjetaDeVideojuego*.
- Comunicación entre componentes mediante props.
- Imágenes locales para representar cada videojuego.


En la 2 versión se implementó:


- Se reemplazó ScrollView por FlatList para mostrar el catálogo.
- Se agregó una barra de categorías.
- Las categorías son táctiles mediante TouchableOpacity.
- Se utiliza useState para indicar la categoría seleccionada.
- Se agregó un indicador visual `●` para mostrar la categoría actual.
- Se agregó el botón *Ver detalle* en cada videojuego.
- Se creó una pantalla de detalle.
- La pantalla de detalle muestra título, género, plataformas, año, desarrollador y descripción.
- El botón *Ver detalle* permite navegar hacia la información del videojuego seleccionado.
- Se agregó la sección *¿De qué va?* con una descripción de cada videojuego.
- Se agregó un botón *Volver* para regresar al catálogo.

en la 3 version se impelmento
- se expandio el catalogo de 4 juegos a 20 juegos para poder darle mas variedad para el cambio de genero 
- se completo el feature del buscador y se reajusto el de feature de genero

En la 4 versión se implementó:

- Se mejoró el buscador para que fuera menos basico(ya no distinge mayuscula y minuscula).
- Se incorporó Zustand para manejar el estado global de la aplicación.
- Se creó un store para guardar la categoría seleccionada y el texto ingresado en el buscador.
- Se incorporó Jest para realizar pruebas automáticas y se configuro con jest-expo
- Se incorporó React Native Testing Library para probar componentes e interacciones del usuario.
- Se agregó un test unitario para comprobar la lógica de búsqueda parcial de videojuegos.
- Se agregó un test del componente TarjetaDeVideojuego, verificando que el título se muestre correctamente.
- Se agregó un test de integración del buscador, simulando que el usuario escribe en el campo de búsqueda y comprobando que aparezca el videojuego correspondiente.
- Actualmente los tres tests implementados se ejecutan correctamente(npm test).



En la quinta versión se implementó:

- Se incorporaron rutas dinámicas con Expo Router para acceder al detalle de cada videojuego utilizando su id.
- Se creó la ruta dinámica detalle/[id].tsx.
- Se utilizó useLocalSearchParams para obtener el id del videojuego seleccionado.
- La pantalla de detalle busca el videojuego correspondiente a partir de ese id.
- Se agregó una animación al botón *informacion* utilizando Animated.
- Al presionar el botón, este cambia de escala antes de navegar al detalle.
- Se utilizaron Animated.Value, Animated.sequence y Animated.timing.
- Se agregó la función *Compartir videojuego*.
- Se utilizó react-native-view-shot para capturar la información del videojuego como una imagen.
- Se utilizó expo-sharing para compartir la imagen de detalle del juego  desde el dispositivo.
- La función de compartir fue probada correctamente en mi celular Android mediante Expo Go version sdk 57.




* Datos 

Actualmente cada videojuego contiene:

- Título.
- Género.
- Categoría.
- Plataformas disponibles.
- Año.
- Desarrollador.
- Descripción.
- Imagen.

