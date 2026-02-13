import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 grid place-content-center overflow-hidden">
            <Image src="/logo.png" alt="GenTrack SA logo" width={36} height={36} className="object-contain" />
          </div>
          <span className="font-semibold tracking-tight text-lg">GenTrack SA</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300">
          <Link href="/#services" className="hover:text-white">Services</Link>
          <Link href="/#process" className="hover:text-white">Process</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/#contact" className="hover:text-white">Contact</Link>
        </nav>
        <Link href="/#contact" className="rounded-xl px-3 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 text-emerald-200 text-sm">Get a quote</Link>
      </div>
    </header>
  );
}
