import { useEffect, useState } from "react";

const initialForm = {
  nome: "",
  descricao: "",
  dataNascimento: "",
  especie: "",
  habitat: "",
  paisOrigem: "",
};

export default function AnimalForm({ onAdd, editData, onUpdate, cancelEdit }) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (editData) setForm(editData);
  }, [editData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editData) {
      onUpdate(form);
    } else {
      onAdd(form);
    }
    setForm(initialForm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editData ? "Editar Animal" : "Cadastrar Animal"}</h2>

      <input
        name="nome"
        placeholder="Nome"
        value={form.nome}
        onChange={handleChange}
        required
      />
      <input
        name="descricao"
        placeholder="Descrição"
        value={form.descricao}
        onChange={handleChange}
        required
      />
      <input
        name="dataNascimento"
        type="date"
        value={form.dataNascimento}
        onChange={handleChange}
        required
      />
      <input
        name="especie"
        placeholder="Espécie"
        value={form.especie}
        onChange={handleChange}
        required
      />
      <input
        name="habitat"
        placeholder="Habitat"
        value={form.habitat}
        onChange={handleChange}
        required
      />
      <input
        name="paisOrigem"
        placeholder="País de Origem"
        value={form.paisOrigem}
        onChange={handleChange}
        required
      />

      <button type="submit">{editData ? "Atualizar" : "Cadastrar"}</button>
      {editData && (
        <button type="button" className="cancel" onClick={cancelEdit}>
          Cancelar
        </button>
      )}
    </form>
  );
}
