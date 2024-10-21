export default function Button({
  children,
  onClick,
  color = "orange",
  size = "sm",
  disabled = false,
}) {
  // Definir cores disponíveis
  const colors = {
    gray: "bg-[#393939] hover:bg-gray-700",
    orange: "bg-[#FF8310] hover:bg-orange-600",
  };

  // Definir classes de estilo com base nas props
  const baseClasses =
    "font-bold rounded text-white uppercase  focus:outline-none focus:ring";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${colors[color]} ${
        disabled ? disabledClasses : ""
      }`}
    >
      {children} {/* Exibindo o texto do botão via children */}
    </button>
  );
}
