import React, { useEffect, useState } from "react";
import { View, Text, Image, Button } from "react-native";
import data from "../data/data.json";
import Livre from "../model/livre";

interface Props {
  livre: Livre;
  setLivre: (livre: Livre | undefined) => void;
}

export default function LivreModal({ livre, setLivre }: Props) {
  return (
    <View
      style={{
        flex: 1,
        marginTop: 50,
        margin: 10,
      }}
    >
      <Button title="close" onPress={() => setLivre(undefined)}></Button>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 10,
          padding: 10,
          backgroundColor: "lightgrey",
        }}
      >
        <View>
          <Text style={{ fontSize: 20 }}>{livre?.titre}</Text>
          <Text style={{ fontSize: 15 }}>{livre?.description}</Text>
        </View>
        <Image
          source={{ uri: livre?.imageUrl }}
          style={{ width: 100, height: 100 }}
        />
      </View>
    </View>
  );
}
