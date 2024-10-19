"use client";
import PetCard from "@app/components/PetCard/PetCard";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import { Grid } from "@chakra-ui/react";

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

  return (
    <Grid className={styles.petSection}>
      {pets.length &&
        pets.map(pet => (
          <PetCard
            key={pet.animal_id}
            img={pet.album_file}
            id={pet.animal_id}
            subId={pet.animal_subid}
            kind={pet.animal_kind}
            color={pet.animal_colour}
            place={pet.shelter_name}
            sex={pet.animal_sex}
            age={pet.animal_age}
            phone={pet.shelter_tel}
            address={pet.shelter_address}
            remark={pet.animal_remark}
          />
        ))}
    </Grid>
  );
};

export default Pet;
