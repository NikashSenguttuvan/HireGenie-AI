export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        rounded-xl
        bg-blue-600
        px-5
        py-3
        font-medium
        text-white
        transition-all
        duration-300
        hover:bg-blue-700
        hover:scale-[1.02]
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}
