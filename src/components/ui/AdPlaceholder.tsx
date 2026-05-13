interface AdPlaceholderProps {
  slot?: string;
  size?: "banner" | "rectangle" | "leaderboard" | "sidebar" | "inline";
  className?: string;
  label?: string;
}

const sizeMap = {
  banner: "h-[90px] w-full",
  rectangle: "h-[250px] w-full max-w-[300px]",
  leaderboard: "h-[90px] w-full max-w-[728px]",
  sidebar: "h-[600px] w-full max-w-[300px]",
  inline: "h-[250px] w-full",
};

export default function AdPlaceholder({
  slot = "adsense-slot",
  size = "banner",
  className = "",
  label,
}: AdPlaceholderProps) {
  return (
    <div
      className={`ad-placeholder ${sizeMap[size]} ${className}`}
      data-ad-slot={slot}
      data-ad-format="auto"
      aria-label="Advertisement"
    >
      <div className="text-center">
        <p className="text-gray-400 text-xs font-medium">Advertisement</p>
        {label && <p className="text-gray-300 text-xs mt-1">{label}</p>}
      </div>
    </div>
  );
}
