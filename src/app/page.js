"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@/components/Card';
import Button from '@/components/Button';

import { useCart } from '@/context/CartContext';  // Importa o hook do contexto do carrinho

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const { addToCart } = useCart();  // Usa o hook do carrinho

  const fetchProducts = async () => {
    try {
      setIsFetchingMore(true);
      const res = await axios.get(`https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=${page}&limit=20`);
      console.log(res.data.data); 
      setProducts((prevProducts) => [...prevProducts, ...res.data.data]);
      setIsLoading(false);
      setIsFetchingMore(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
      setIsFetchingMore(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro ao carregar os produtos: {error.message}</p>;

  const loadMoreProducts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {products.map((product) => (
          <Card
            key={product.id}
            imageSrc={product.image}
            imageAlt={product.name}
            title={product.name}
            description={product.description}
            price={product.price}
            onBuy={() => addToCart(product)}  // Adiciona o produto ao carrinho
          />
        ))}
      </div>
      
      <div className="mt-4 flex justify-center">
        <Button 
          onClick={loadMoreProducts} 
          color='gray' 
          disabled={isFetchingMore}
        >
          {isFetchingMore ? 'Carregando...' : 'Carregar Mais'}
        </Button>
      </div>
    </div>
  );
}
