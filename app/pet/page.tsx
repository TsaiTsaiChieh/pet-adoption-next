"use client";
import PetCard from "@app/components/PetCard/PetCard";
import { useEffect, useState } from "react";

const Pet = () => {
  const [pets, setPets] = useState<PetDataType[]>([]);
  useEffect(() => {
    const fetchPetData = async () => {
      const res = await fetch(
        "https://data.moa.gov.tw/Service/OpenData/TransService.aspx?UnitId=QcbUEzN6E6DL&$top=18&$skip=0"
      );
      setPets(await res.json());
    };
    fetchPetData();
  }, []);

  return pets.map(pet => (
    <PetCard key={pet.animal_id} img={pet.album_file} id={pet.animal_id} />
  ));
};

export default Pet;
