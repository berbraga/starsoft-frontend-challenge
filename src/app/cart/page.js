"use client";

import { useCart } from "@/context/CartContext";
import Button from "@/components/Button";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Função para calcular o total de ETF
  const totalETF = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  if (cart.length === 0) {
    return <p className="text-white text-center">Seu carrinho está vazio.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Carrinho de Compras</h1>
      <div className="flex flex-col space-y-4">
        {cart.map((product) => (
          <div
            className="p-4 bg-black m-4 rounded-lg flex "
            key={product.id}
            style={{ width: "100%" }}
          >
            <Image
              src={product.image}
              alt={product.name}
              width={150}
              height={50}
              style={{ borderRadius: "8px" }}
              priority
            />
            
            <div className="flex-grow mx-4">
              <h1 className="text-xl font-bold text-white">{product.name}</h1>
              <h1 className="text-xl text-white">{product.description}</h1>

              {/* Controles de quantidade */}
              <div className="flex items-center mt-2">
                <button
                  className="bg-gray-500 text-white px-2 py-1 rounded"
                  onClick={() =>
                    updateQuantity(product.id, product.quantity - 1)
                  }
                >
                  -
                </button>
                <span className="text-white mx-4">{product.quantity}</span>
                <button
                  className="bg-gray-500 text-white px-2 py-1 rounded"
                  onClick={() =>
                    updateQuantity(product.id, product.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-auto flex justify-between ">
              <div className="flex items-center">
                <Image
                  src="/Ellipse 770.png"
                  alt="Símbolo do ETF"
                  width={24}
                  height={24}
                />
                <span className="text-white ml-2">
                  {product.price * product.quantity} ETF
                </span>
              </div>

              {/* Botão para remover o produto */}
              <Button color="gray" onClick={() => removeFromCart(product.id)}>
                Remover
              </Button>
            </div>
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
