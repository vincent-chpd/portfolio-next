import CTAButton from "./_components/CTAButton";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <div>
      <main >
        <Header />
        <Hero />
        <div className="flex justify-center">
          <CTAButton />
        </div>
      </main>
    </div>
  );
}
