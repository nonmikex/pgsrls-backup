import React from "react";
import Navbar from "../components/navigation/Navbar";
import { ShoppingCartIcon } from "lucide-react";
import Footer from "../components/navigation/Footer";

function Vetrina() {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen flex justify-center items-center">
        <p className="text-2xl font-bold flex flex-col items-center gap-4">
          <ShoppingCartIcon size={120} />
          Al momento nessun annuncio disponibile.
        </p>
      </main>
      <Footer />
    </>
  );
}

export default Vetrina;
