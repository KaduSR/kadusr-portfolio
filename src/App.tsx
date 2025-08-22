import React from "react";
import { Header } from "./components/Header";
import { ProfileCard } from "./components/ProfileCard";
import { About } from "./components/About";

function App() {
  return (
    <div className="bg-[#1E1E1E] text-white font-sans">
      <main className="container mx-auto">
        <Header />
        <div className="pt-23" id="profile-card-container">
          <ProfileCard />
        </div>

        <About />
        <h1 className="text-4xl text-center pt-24">
          Construção constante do meu Portfólio
        </h1>
      </main>
    </div>
  );
}

export default App;