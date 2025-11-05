import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <div>© {new Date().getFullYear()} GenTrack SA • Wildlife Genetics Consulting</div>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:text-white">Terms</Link>
          <Link href="#" className="hover:text-white">Privacy</Link>
          <Link href="/#contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
