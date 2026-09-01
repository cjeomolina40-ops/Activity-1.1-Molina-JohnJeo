export default function Button({ children, href, variant = 'primary', ...props }) {
  const className = `button button-${variant}`;

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
