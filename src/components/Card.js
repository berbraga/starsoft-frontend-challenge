import Image from "next/image";
import Button from "./Button";

export default function Card({ imageSrc, imageAlt, title, description, price }) {
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

      <div className="flex-grow mt-4 ">
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <p className="text-white mt-4 text-sm">{description}</p>
      </div>

      <div className="flex justify-between">
        <div className="mt-auto align-center flex items-center">
          <Image
            src="/Ellipse 770.png"
            alt="Símbolo do ETF"
            width={24}
            height={24}
          />
          <span className="text-white ml-2">{price} ETF</span>
        </div>
        <Button> comprar </Button>
      </div>
    </div>
  );
}
