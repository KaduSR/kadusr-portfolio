import React from "react";
import { Header } from "./components/Header";
import { ProfileCard } from "./components/ProfileCard";
import { About } from "./components/About";
import { Links } from "./components/Links";

function App() {
  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen font-sans">
      <main className="container mx-auto px-4">
        <Header />
        <ProfileCard />
        <Links />
        <About />
        <h1 className="text-4xl text-center pt-24">Construção constante do meu Portfólio</h1>
      </main>
    </div>
  );
}

export default App;