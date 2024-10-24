import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
// import { useCart } from "@/context/CartContext";


export default function Header({ cartItemCount }) {
  //  const { cart } = useCart(); 
  // const totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);
  return (
    <header className="text-white p-4">
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <Link href="/">
              
              <Image
                src="/Logo-dark.svg"
                alt="Símbolo do ETF"
                width={100}
                height={100}
              />
            </Link>
          </li>

          <li className="relative">
            <Link href="/cart" className="flex items-center">
              <ShoppingBagIcon className="h-6 w-6 text-orange-500" />
              {cartItemCount > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
