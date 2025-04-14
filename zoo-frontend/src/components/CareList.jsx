export default function CareList({ cuidados, onEdit, onDelete }) {
  return (
    <div>
      <h2>Lista de Cuidados</h2>
      {cuidados.length === 0 ? (
        <p>Nenhum cuidado cadastrado.</p>
      ) : (
        <ul>
          {cuidados.map((cuidado, index) => (
            <li key={index}>
              <strong>{cuidado.nome}</strong> - {cuidado.frequencia}
              <br />
              <em>{cuidado.descricao}</em>
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
