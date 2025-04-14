export default function AnimalList({ animais, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Animais</h2>
      {animais.length === 0 ? (
        <p>Nenhum animal cadastrado.</p>
      ) : (
        <ul>
          {animais.map((animal, index) => (
            <li key={index}>
              <strong>{animal.nome}</strong> - {animal.especie} (
              {animal.habitat}, {animal.paisOrigem})
              <br />
              <button onClick={() => onEdit(index)}>Editar</button>
              <button onClick={() => onDelete(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
