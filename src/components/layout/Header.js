// src/components/Header.js
export default function Header() {
  return (
    <header className="text-white p-4">
      <nav>
        <ul className="flex justify-between">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
