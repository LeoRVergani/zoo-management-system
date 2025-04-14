import { useEffect, useState } from "react";

const initialForm = {
  nome: "",
  descricao: "",
  frequencia: "",
};

export default function CareForm({ onAdd, editData, onUpdate, cancelEdit }) {
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
      <h2>{editData ? "Editar Cuidado" : "Cadastrar Cuidado"}</h2>

      <input
        name="nome"
        placeholder="Nome do cuidado"
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
      <select
        name="frequencia"
        value={form.frequencia}
        onChange={handleChange}
        required
      >
        <option value="">Frequência</option>
        <option value="Diária">Diária</option>
        <option value="Semanal">Semanal</option>
        <option value="Mensal">Mensal</option>
        <option value="Anual">Anual</option>
      </select>

      <button type="submit">{editData ? "Atualizar" : "Cadastrar"}</button>
      {editData && (
        <button type="button" className="cancel" onClick={cancelEdit}>
          Cancelar
        </button>
      )}
    </form>
  );
}
