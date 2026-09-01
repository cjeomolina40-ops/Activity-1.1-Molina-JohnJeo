export default function NavigationItem({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  );
}
