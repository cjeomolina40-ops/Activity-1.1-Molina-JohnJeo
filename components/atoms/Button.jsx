export default function Button({
  children,
  href,
  variant = 'primary',
  type = 'button',
}) {
  const className =
    variant === 'secondary'
      ? 'button button-secondary'
      : 'button';

  if (href) {
    return (
      <a
        href={href}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={className}
    >
      {children}
    </button>
  );
}