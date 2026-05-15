export default function AdSlot({
  label = "Advertisement",
  title = "Ad space",
  size = "Responsive",
  className = "",
}) {
  return (
    <aside className={`ad-slot ${className}`} aria-label={label}>
      <span>{title}</span>
      <strong>{size}</strong>
    </aside>
  );
}
