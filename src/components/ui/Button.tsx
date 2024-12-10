export function Button({ children, ...props }) {
  return (
    <button className="rounded-lg font-secondary bg-white px-4 py-2 font-medium" {...props}>
      {children}
    </button>
  );
}
