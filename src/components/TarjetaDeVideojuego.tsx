import { ImageSourcePropType ,  TouchableOpacity  } from "react-native";
import styled from "styled-components/native";
import { useRouter } from "expo-router";

type PropiedadesTarjeta = {
  titulo: string;
  genero: string;
  plataformas: string;
  imagen: ImageSourcePropType;
  año: string;
  desarrollador: string;
  descripcion: string;
};

export default function TarjetaDeVideojuego({
  titulo,
  genero,
  plataformas,
  imagen,
  año,
  desarrollador,
  descripcion,
}: PropiedadesTarjeta) {

  const router = useRouter();

  return (
    <Tarjeta>
      <ImagenVideojuego source={imagen} />

      <Informacion>
        <Titulo>{titulo}</Titulo>
        <Genero>{genero}</Genero>
        <Plataformas>{plataformas}</Plataformas>

      <BotonDetalle
      onPress={() =>
        router.push({
        pathname: "/detalle",
        params: {
          titulo,
          genero,
          plataformas,
          año,
          desarrollador,
          descripcion,
        },
      })
    }
  >
  <TextoBoton>Ver detalle</TextoBoton>
</BotonDetalle>

      </Informacion>
    </Tarjeta>
  );
}

const BotonDetalle = styled(TouchableOpacity)`
  margin-top: 15px;
  padding: 12px;
  background-color: #222222;
  border-radius: 8px;
`;

const TextoBoton = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
`;



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