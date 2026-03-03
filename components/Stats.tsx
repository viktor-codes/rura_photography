export function Stats() {
  const items = [
    { value: "24h", label: "Delivery turnaround" },
    { value: "A7M3", label: "Sony full-frame" },
    { value: "17–300", label: "mm lens coverage" },
    { value: "100%", label: "Success rate" },
  ];

  return (
    <section
      aria-label="Service statistics"
      className="flex flex-col bg-[#0e0e0c] text-page md:flex-row"
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="flex-1 border-t border-white/10 px-8 py-10 text-center md:border-r last:md:border-r-0 md:px-16"
        >
          <span className="block font-heading text-[2.5rem] font-light text-white">
            {item.value}
          </span>
          <span className="mt-2 block text-[0.65rem] uppercase tracking-[0.15em] text-white/90">
            {item.label}
          </span>
        </div>
      ))}
    </section>
  );
}
