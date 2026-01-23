"use client";

import Image from "next/image";

interface AspireBannerProps {
  onClick?: () => void;
}

export function AspireBanner({ onClick }: AspireBannerProps) {
  return (
    <div
      className="cursor-pointer transition-opacity hover:opacity-90"
      onClick={onClick}
    >
      <Image
        src="/aspire-banner.png"
        alt="Aspire Banner"
        width={600}
        height={200}
        className="h-auto w-full max-w-sm rounded-lg object-contain"
        priority
      />
    </div>
  );
}
