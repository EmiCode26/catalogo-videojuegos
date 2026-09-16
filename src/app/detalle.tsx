import { Text, View } from "react-native";
import styled from "styled-components/native";
import { useLocalSearchParams } from "expo-router";
export default function Detalle() {
 
    const {
    titulo,
    genero,
    plataformas,
    año,
    desarrollador,
    descripcion,
  } = useLocalSearchParams();

  
    return (
    <Contenedor>
      <Titulo>{titulo}</Titulo>

      <Texto>Género: {genero}</Texto>
      <Texto>Plataformas: {plataformas}</Texto>
      <Texto>Año: {año}</Texto>
      <Texto>Desarrollador: {desarrollador}</Texto>
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