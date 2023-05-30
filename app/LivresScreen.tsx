import React, { useEffect, useState } from "react";
import { Button, View, Text, Pressable, FlatList, Image } from "react-native";
import data from "../data/data.json";
import Livre from "../model/livre";
import LivreModal from "./LivreModal";

export default function LivresScreen({ navigation, route }: any) {
  const [livres, setLivres] = useState<Livre[]>([]);
  const [categorie, setCategorie] = useState<string>();
  const [livre, setLivre] = useState<Livre | undefined>(undefined);

  useEffect(() => {
    setLivres(
      data.livres.map(
        (l: {
          id: string;
          categories: string[];
          titre: string;
          description: string;
          tomes: number;
          imageUrl: string;
          enCours: boolean;
        }) => {
          const livre: Livre = {
            id: l.id,
            categories: l.categories,
            titre: l.titre,
            description: l.description,
            tomes: l.tomes,
            imageUrl: l.imageUrl,
            enCours: l.enCours,
          };

          return livre;
        }
      )
    );

    if (typeof categorie === "string" && categorie !== "") {
      setLivres((prev) => prev.filter((l) => l.categories.includes(categorie)));
    }
  }, [categorie]);

  useEffect(() => {
    if (route && route.params && route.params.categorie) {
      setCategorie(route.params.categorie);
    } else {
      setCategorie("");
    }
  }, [route.params?.categorie]);

  return (
    <>
      {livre !== undefined ? (
        <LivreModal livre={livre} setLivre={setLivre} />
      ) : (
        <View
          style={{
            flex: 1,
            marginTop: 50,
            margin: 10,
          }}
        >
          {categorie !== "" && (
            <View
              style={{
                margin: 10,
                padding: 10,
              }}
            >
              <Button title="Clear filter" onPress={() => setCategorie("")} />
            </View>
          )}
          <FlatList
            data={livres}
            renderItem={({ index, item }) => (
              <Pressable onPress={() => setLivre(item)}>
                <View
                  key={index}
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    margin: 10,
                    padding: 10,
                    backgroundColor: "#fff",
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 10,
                    elevation: 5,
                  }}
                >
                  <Image
                    source={{ uri: item.imageUrl }}
                    alt={item.titre}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      marginRight: 10,
                    }}
                  />
                  <Text>{item.titre}</Text>
                </View>
              </Pressable>
            )}
          />
        </View>
      )}
    </>
  );
}
