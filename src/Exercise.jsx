import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard 
          name="Daffa DZ"
          email="daffahri@gmail.com"
          street="Jl. Hassanudin"
          city="Semarang"
          />

          <UserCard name="Kitings Eruditio"
          email="tingsyak@gmail.com"
          street="Jl. Gajah Mada"
          city="Semarang"
          />

          <UserCard name="Prone Wolford"
          email="adzanmaghrib@gmail.com"
          street="Jl. Pemuda"
          city="Semarang"
          />

        </div>
      </div>
    </>
  );
}

export default Exercise;