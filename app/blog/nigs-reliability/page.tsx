import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Post() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="container py-16 prose prose-invert max-w-3xl">
        <h1>How reliable is NIGS for abundance?</h1>
        <p className="lead">Draft placeholder content. Replace with your post.</p>
        <p>Use this space to share methods, case studies, and field notes relevant to ranch managers and conservation teams.</p>
        <ul>
          <li>What problem are we solving?</li>
          <li>What did we do?</li>
          <li>What did we find?</li>
          <li>How can others apply this?</li>
        </ul>
      </article>
      <Footer />
    </div>
  );
}
