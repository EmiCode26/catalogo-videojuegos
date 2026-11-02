import { useRef } from "react";
import {
  ImageSourcePropType,
  TouchableOpacity,
  Animated,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import { useRouter } from "expo-router";

type PropiedadesTarjeta = {
  id: number;
  titulo: string;
  genero: string;
  plataformas: string;
  imagen: ImageSourcePropType;
  año: string;
  desarrollador: string;
  descripcion: string;
};

export default function TarjetaDeVideojuego({
  id,
  titulo,
  genero,
  plataformas,
  imagen,
  año,
  desarrollador,
  descripcion,
}: PropiedadesTarjeta) {

  const router = useRouter();

  const escalaBoton = useRef(new Animated.Value(1)).current;

  const irAlDetalle = () => {
    Animated.sequence([
      Animated.timing(escalaBoton, {
        toValue: 0.9,
        duration: 120,
        useNativeDriver: Platform.OS !== "web",
      }),
      Animated.timing(escalaBoton, {
        toValue: 1,
        duration: 160,
        useNativeDriver: Platform.OS !== "web",
      }),
    ]).start(({ finished }) => {
      if (!finished) return;

      router.push({
        pathname: "/detalle/[id]",
        params: { id: id.toString() },
      });
    });
  };

  return (
    <Tarjeta>
      <ImagenVideojuego source={imagen} />

      <Informacion>
        <Titulo>{titulo}</Titulo>
        <Genero>{genero}</Genero>
        <Plataformas>{plataformas}</Plataformas>

        <Animated.View style={{ transform: [{ scale: escalaBoton }] }}>
          <BotonDetalle onPress={irAlDetalle}>
            <TextoBoton>informacion</TextoBoton>
          </BotonDetalle>
        </Animated.View>

      </Informacion>
    </Tarjeta>
  );
}

const BotonDetalle = styled(TouchableOpacity)`
  margin-top: 15px;
  padding: 12px;
  background-color: #2563EB;
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
