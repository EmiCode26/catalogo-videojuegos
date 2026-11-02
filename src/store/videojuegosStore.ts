import { create } from "zustand";

type VideojuegosStore = {
  categoriaActual: string;
  busqueda: string;

  cambiarCategoria: (categoria: string) => void;
  cambiarBusqueda: (texto: string) => void;
};

export const useVideojuegosStore = create<VideojuegosStore>((set) => ({
  categoriaActual: "Acción",
  busqueda: "",

  cambiarCategoria: (categoria) =>
    set({
      categoriaActual: categoria,
    }),

  cambiarBusqueda: (texto) =>
    set({
      busqueda: texto,
    }),
}));