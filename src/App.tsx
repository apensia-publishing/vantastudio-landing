import HeroSection from "./components/sections/HeroSection";
import HamburgerMenu from "./components/sections/HamburgerMenu";

export default function App() {
  return (
    <main className="w-full">
      <HamburgerMenu />
      <HeroSection />
    </main>
  );
}
