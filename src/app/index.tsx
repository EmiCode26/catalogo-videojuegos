import { FlatList, Text, View , TouchableOpacity  } from "react-native";
import styled from "styled-components/native";
import { useState } from "react";

import TarjetaDeVideojuego from "../components/TarjetaDeVideojuego";
import videojuegos from "../data/videojuegos";


const categorias = [
  "Acción",
  "Estrategia",
  "Terror",
  "Deportes",
];


export default function PantallaPrincipal() {
 
 const [categoriaActual, setCategoriaActual] = useState("Acción");
 
  return (
    <Contenedor>
      <Encabezado>
        <TituloPrincipal>
          Catálogo de Videojuegos
        </TituloPrincipal>

        <Subtitulo>
          Descubrí videojuegos 
        </Subtitulo>
      </Encabezado>

    <BarraCategorias>
  {categorias.map((categoria) => (
    <TouchableOpacity
      key={categoria}
      onPress={() => setCategoriaActual(categoria)}
    >
      <Categoria>
        {categoria}
      </Categoria>

      <Indicador>
        {categoriaActual === categoria ? "●" : "○"}
      </Indicador>
    </TouchableOpacity>
  ))}
</BarraCategorias>


    <FlatList
      data={videojuegos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
          <TarjetaDeVideojuego
          titulo={item.titulo}
          genero={item.genero}
          plataformas={item.plataformas}
          año={item.año}
          desarrollador={item.desarrollador}
          descripcion={item.descripcion}
          imagen={item.imagen}
          />
        )}
      />       
    </Contenedor>
  );
}

const Contenedor = styled(View)`
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

const BarraCategorias = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
`;

const Categoria = styled(Text)`
  text-align: center;
`;

const Indicador = styled(Text)`
  text-align: center;
`;
