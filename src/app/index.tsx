import { ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";

import TarjetaDeVideojuego from "../components/TarjetaDeVideojuego";
import videojuegos from "../data/videojuegos";

export default function PantallaPrincipal() {
  return (
    <Contenedor>
      <Encabezado>
        <TituloPrincipal>
          Catálogo de Videojuegos
        </TituloPrincipal>

        <Subtitulo>
          Descubrí videojuegos y sus plataformas
        </Subtitulo>
      </Encabezado>

      <ListaVideojuegos>
        {videojuegos.map((videojuego) => (
          <TarjetaDeVideojuego
            key={videojuego.id}
            titulo={videojuego.titulo}
            genero={videojuego.genero}
            plataformas={videojuego.plataformas}
            imagen={videojuego.imagen}
          />
        ))}
      </ListaVideojuegos>
    </Contenedor>
  );
}

const Contenedor = styled(ScrollView)`
  flex: 1;
  background-color: #f2f2f2;
`;

const Encabezado = styled(View)`
  width: 100%;
  max-width: 700px;
  align-self: center;
  padding: 60px 20px 25px 20px;
`;

const TituloPrincipal = styled(Text)`
  font-size: 32px;
  font-weight: bold;
`;

const Subtitulo = styled(Text)`
  font-size: 16px;
  color: #666666;
  margin-top: 6px;
`;

const ListaVideojuegos = styled(View)`
   width: 100%;
  max-width: 700px;
  align-self: center;
  padding: 0 20px 40px 20px;
`;