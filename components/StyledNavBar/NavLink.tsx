export function NavLink({ to, textColor, children }) {
  return (
    <a href={to} className={`mx-4 + ${textColor}`}>
      {children}
    </a>
  );
}
