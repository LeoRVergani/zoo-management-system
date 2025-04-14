import { useState } from "react";
import CareForm from "../components/CareForm";
import CareList from "../components/CareList";

export default function CaresPage() {
  const [cuidados, setCuidados] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const adicionarCuidado = (novoCuidado) => {
    setCuidados([...cuidados, novoCuidado]);
  };

  const editarCuidado = (index) => {
    setEditIndex(index);
  };

  const atualizarCuidado = (cuidadoAtualizado) => {
    const atualizados = [...cuidados];
    atualizados[editIndex] = cuidadoAtualizado;
    setCuidados(atualizados);
    setEditIndex(null);
  };

  const removerCuidado = (index) => {
    const atualizados = [...cuidados];
    atualizados.splice(index, 1);
    setCuidados(atualizados);
  };

  return (
    <div className="container">
      <h1>Gerenciamento de Cuidados</h1>
      <CareForm
        onAdd={adicionarCuidado}
        editData={editIndex !== null ? cuidados[editIndex] : null}
        onUpdate={atualizarCuidado}
        cancelEdit={() => setEditIndex(null)}
      />
      <hr />
      <CareList
        cuidados={cuidados}
        onEdit={editarCuidado}
        onDelete={removerCuidado}
      />
    </div>
  );
}
