import Image from "next/image"

export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-3 shrink-0">
      <Image src="/logo.png" alt="ASTRAH QS" width={100} height={24} className="h-4 w-auto" priority />
    </a>
  )
}
