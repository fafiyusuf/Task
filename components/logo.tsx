import Image from "next/image"

export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-3 shrink-0">
      <Image src="/logo.png" alt="ASTRAH QS" width={120} height={32} className="h-5 w-auto" priority />
    </a>
  )
}
