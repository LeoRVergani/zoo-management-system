import { useState } from "react";
import AnimalForm from "../components/AnimalForm";
import AnimalList from "../components/AnimalList";

export default function AnimalsPage() {
  const [animais, setAnimais] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const adicionarAnimal = (novoAnimal) => {
    setAnimais([...animais, novoAnimal]);
  };

  const editarAnimal = (index) => {
    setEditIndex(index);
  };

  const atualizarAnimal = (animalAtualizado) => {
    const atualizados = [...animais];
    atualizados[editIndex] = animalAtualizado;
    setAnimais(atualizados);
    setEditIndex(null);
  };

  const removerAnimal = (index) => {
    const atualizados = [...animais];
    atualizados.splice(index, 1);
    setAnimais(atualizados);
  };

  return (
    <div className="container">
      <h1>Gerenciamento de Animais</h1>
      <AnimalForm
        onAdd={adicionarAnimal}
        editData={editIndex !== null ? animais[editIndex] : null}
        onUpdate={atualizarAnimal}
        cancelEdit={() => setEditIndex(null)}
      />
      <hr />
      <AnimalList
        animais={animais}
        onEdit={editarAnimal}
        onDelete={removerAnimal}
      />
    </div>
  );
}
