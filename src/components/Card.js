import Image from "next/image";
import Button from "./Button";
import { useCart } from "@/context/CartContext"; // Importar o hook do carrinho

export default function Card({
  imageSrc,
  imageAlt,
  title,
  description,
  price,
}) {
  const { addToCart } = useCart(); // Usa a função de adicionar ao carrinho

  // Produto a ser adicionado ao carrinho
  const product = {
    id: imageSrc, // Usando `imageSrc` como ID temporário (substitua por um ID real)
    name: title,
    image: imageSrc,
    price: price,
  };

  return (
    <div
      className="p-4 bg-black m-4 rounded-lg flex flex-col"
      style={{ width: "300px", height: "560px" }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={200}
        style={{ borderRadius: "8px" }}
        priority
      />

      <div className="flex-grow mt-4">
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <p className="text-white mt-4 text-sm">{description}</p>
      </div>

      <div className="mt-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/Ellipse 770.png"
            alt="Símbolo do ETF"
            width={24}
            height={24}
          />
          <span className="text-white ml-2">{price} ETF</span>
        </div>

        {/* Botão Comprar */}
        <Button color="orange" onClick={() => addToCart(product)}>
          Comprar
        </Button>
      </div>
    </div>
  );
}
