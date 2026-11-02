
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { useVideojuegosStore } from "../store/videojuegosStore";
import styled from "styled-components/native";
import { useState } from "react";

import TarjetaDeVideojuego from "../components/TarjetaDeVideojuego";
import videojuegos from "../data/videojuegos";



const categorias = [
  "Acción",
  "Estrategia",
  "Terror",
  "Carreras",
  "RPG",
];


export default function PantallaPrincipal() {
 
  const categoriaActual = useVideojuegosStore(
  (state) => state.categoriaActual
  );

  const busqueda = useVideojuegosStore(
  (state) => state.busqueda
  );

  const cambiarCategoria = useVideojuegosStore(
  (state) => state.cambiarCategoria
  );

  const cambiarBusqueda = useVideojuegosStore(
  (state) => state.cambiarBusqueda
  );

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


  <Buscador
    testID="input-busqueda"
    placeholder="Buscar un videojuego"
    value={busqueda}
    onChangeText={cambiarBusqueda}
    />

  <BarraCategorias>
  {categorias.map((categoria) => (
    <TouchableOpacity
      key={categoria}
      onPress={() => cambiarCategoria(categoria)}
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
  extraData={{ categoriaActual, busqueda }}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) =>
    busqueda === "" ? (
      item.categoria === categoriaActual ? (
        <TarjetaDeVideojuego
          titulo={item.titulo}
          genero={item.genero}
          plataformas={item.plataformas}
          año={item.año}
          desarrollador={item.desarrollador}
          descripcion={item.descripcion}
          imagen={item.imagen}
        />
      ) : null
    ) : item.titulo.toLowerCase().includes(busqueda.toLowerCase()) ? (
      <TarjetaDeVideojuego
        titulo={item.titulo}
        genero={item.genero}
        plataformas={item.plataformas}
        año={item.año}
        desarrollador={item.desarrollador}
        descripcion={item.descripcion}
        imagen={item.imagen}
      />
    ) : null
  }
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


const BarraCategorias = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
`;

const Categoria = styled(Text)`
  text-align: center;
`;

const Indicador = styled(Text)`
  text-align: center;
`;

const Buscador = styled(TextInput)`
  background-color: white;
  margin: 0 20px 10px 20px;
  padding: 12px;
  border-radius: 8px;
`;