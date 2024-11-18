import { FlatList, Text, View } from "react-native";

import { meditations } from "../data";
import MeditationMenuItem from "@/components/MeditationMenuItem";


export default function Page() {
  return (
    <FlatList
      className="bg-gray-950"
      data={meditations}
      contentContainerClassName="gap-5 p-5"
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <MeditationMenuItem meditation={item} />
      )}
    />

  );
}
