export default function Icon({ symbol = '⌕', label }) {
  return (
    <span role="img" aria-label={label}>
      {symbol}
    </span>
  );
}
