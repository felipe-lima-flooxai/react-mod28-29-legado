export default function Pedido() {
  const pizzas = [
    { sabor: 'Calabresa', tamanho: 'Grande' },
    { sabor: 'Quatro Queijos', tamanho: 'Média' }
  ];

  return (
    <div>
      <h3>Pedido de Pizza</h3>
      {pizzas.map((p, i) => (
        <ItemPizza key={i} sabor={p.sabor} tamanho={p.tamanho} />
      ))}
    </div>
  );
}

export function ItemPizza({ sabor, tamanho }) {
  return <p>🍕 {sabor} - {tamanho}</p>;
}