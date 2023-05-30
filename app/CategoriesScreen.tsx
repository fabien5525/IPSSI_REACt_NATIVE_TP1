import { View, Text, FlatList } from "react-native";
import data from "../data/data.json";
import Categorie from "../model/categorie";
import { useEffect, useState } from "react";

export default function CategoriesScreen({ navigation }: any) {
  const [categories, setCategories] = useState<Categorie[]>([]);

  const handleNavigation = (id: string) => {
    navigation.navigate("Livres", { categorie: id });
  };

  useEffect(() => {
    setCategories(
      data.categories.map((c: { id: string; title: string; color: string }) => {
        const cat: Categorie = {
          id: c.id,
          genre: c.title,
          couleur: c.color,
        };
        return cat;
      })
    );
  }, []);

  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
        margin: 10,
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        transform: [{ scale: 1.5 }],
        top: "50%",
      }}
    >
      <FlatList
        data={categories}
        renderItem={({ index, item }) => (
          <View
            key={index}
            style={{
              backgroundColor: item.couleur,
              padding: 10,
              margin: 10,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text onPress={() => handleNavigation(item.id)}>{item.genre}</Text>
          </View>
        )}
      />
    </View>
  );
}
