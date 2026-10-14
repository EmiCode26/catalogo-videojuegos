
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";


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
 
 const [categoriaActual, setCategoriaActual] = useState("Acción");
 
 const [busqueda, setBusqueda] = useState("");

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
    placeholder="Buscar videojuego"
    value={busqueda}
    onChangeText={setBusqueda}
    />

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
    ) : item.titulo === busqueda ? (
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