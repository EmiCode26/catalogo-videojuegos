import { Text, View } from "react-native";
import styled from "styled-components/native";
import { useLocalSearchParams, useRouter } from "expo-router";
import videojuegos from "../../data/videojuegos";
import { useRef } from "react";
import * as Sharing from "expo-sharing";
import { captureRef } from "react-native-view-shot";

export default function Detalle() {
  const router = useRouter();
  const cardRef = useRef<View>(null);

const compartirVideojuego = async () => {
  try {
    if (!(await Sharing.isAvailableAsync())) {
      return;
    }

    const uri = await captureRef(cardRef, {
      format: "png",
      quality: 1,
    });

    await Sharing.shareAsync(uri, {
      mimeType: "image/png",
      dialogTitle: "Compartir videojuego",
    });
  } catch {
    console.log("No se pudo compartir el videojuego");
  }
};


  const { id } = useLocalSearchParams<{ id: string }>();

  const videojuego = videojuegos.find(
    (juego) => juego.id.toString() === id
  );

  if (!videojuego) {
    return <Text>No se encontró el videojuego</Text>;
  }

  const {
    titulo,
    genero,
    plataformas,
    año,
    desarrollador,
    descripcion,
  } = videojuego;

  return (
    <Contenedor>
      <BotonVolver
        onPress={() => {
          if (router.canGoBack()) {
            router.back();
          } else {
            router.replace("/");
          }
        }}
      >
        <TextoBoton>volver hacia atras</TextoBoton>
      </BotonVolver>

      


      <View
        ref={cardRef}
       collapsable={false}
       style={{ backgroundColor: "#f2f2f2" }}
      >



      <Titulo>{titulo}</Titulo>

      <Texto>Género: {genero}</Texto>
      <Texto>Plataformas: {plataformas}</Texto>
      <Texto>Año: {año}</Texto>
      <Texto>Desarrollador: {desarrollador}</Texto>

      <Subtitulo>¿De qué va?</Subtitulo>
      <Descripcion>{descripcion}</Descripcion>
    </View> 
   

      <BotonCompartir onPress={compartirVideojuego}>
        <TextoBotonCompartir>Compartir videojuego</TextoBotonCompartir>
      </BotonCompartir>

    </Contenedor>

  );
}

const Contenedor = styled(View)`
  flex: 1;
  padding: 60px 20px;
  background-color: #f2f2f2;
`;

const Titulo = styled(Text)`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Texto = styled(Text)`
  font-size: 16px;
`;

const Subtitulo = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 10px;
`;

const Descripcion = styled(Text)`
  font-size: 16px;
`;

const BotonVolver = styled.TouchableOpacity`
  margin-bottom: 20px;
`;

const TextoBoton = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;



const BotonCompartir = styled.TouchableOpacity`
  margin-top: 25px;
  padding: 12px;
  background-color: #6d28d9;
  border-radius: 8px;
`;

const TextoBotonCompartir = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
`;