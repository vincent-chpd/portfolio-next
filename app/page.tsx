import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div className="grid grid-cols-[200px_1fr] h-[100vh]">
      <Header />
      <Hero />

    </div>
  );
}
