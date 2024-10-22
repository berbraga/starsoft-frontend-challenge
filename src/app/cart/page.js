"use client";

import { useCart } from "@/context/CartContext";
import Button from "@/components/Button";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  // Função para calcular o total de ETF
  const totalETF = cart.reduce((acc, product) => acc + product.price, 0);

  if (cart.length === 0) {
    return <p className="text-white text-center">Seu carrinho está vazio.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Carrinho de Compras</h1>
      <div className="flex flex-col space-y-4">
        {cart.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h2 className="text-white">{product.name}</h2>
              <p className="text-gray-400">{product.price} ETF</p>
            </div>
            <Button color="gray" onClick={() => removeFromCart(product.id)}>
              Remover
            </Button>
          </div>
        ))}
      </div>

      {/* Total de ETF */}
      <div className="mt-6 text-right">
        <h2 className="text-2xl font-bold text-white">TOTAL: {totalETF} ETF</h2>
      </div>
    </div>
  );
}
