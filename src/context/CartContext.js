"use client"; // Certifique-se de ter isso no topo

import { createContext, useContext, useState } from "react";

// Cria o contexto do carrinho
const CartContext = createContext();

// Hook para usar o contexto do carrinho
export const useCart = () => {
  return useContext(CartContext);
};

// Provedor do contexto do carrinho
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Função para adicionar um produto ao carrinho (ou incrementar a quantidade)
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Incrementa a quantidade se o produto já estiver no carrinho
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Adiciona o produto com quantidade 1 se não estiver no carrinho
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Função para remover um produto do carrinho
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  // Função para alterar a quantidade de um produto
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(quantity, 1) }
          : product
      )
    );
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
