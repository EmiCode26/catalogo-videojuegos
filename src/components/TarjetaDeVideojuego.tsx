import { ImageSourcePropType } from "react-native";
import styled from "styled-components/native";

type PropiedadesTarjeta = {
  titulo: string;
  genero: string;
  plataformas: string;
  imagen: ImageSourcePropType;
};

export default function TarjetaDeVideojuego({
  titulo,
  genero,
  plataformas,
  imagen,
}: PropiedadesTarjeta) {
  return (
    <Tarjeta>
      <ImagenVideojuego source={imagen} />

      <Informacion>
        <Titulo>{titulo}</Titulo>
        <Genero>{genero}</Genero>
        <Plataformas>{plataformas}</Plataformas>
      </Informacion>
    </Tarjeta>
  );
}

const Tarjeta = styled.View`
  background-color: white;
  border-radius: 15px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const ImagenVideojuego = styled.Image`
  width: 100%;
  height: 200px;
`;

const Informacion = styled.View`
  padding: 15px;
`;

const Titulo = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 6px;
`;

const Genero = styled.Text`
  font-size: 16px;
  margin-bottom: 6px;
`;

const Plataformas = styled.Text`
  font-size: 14px;
  color: #666666;
`;