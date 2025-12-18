import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import "../global.css";

export default function Task() {

  const DATA = [
    { id: 1, title: "Hello World", description: "Hello World Again!" },
    { id: 2, title: "Supabase", description: "Supabase online backend" }
  ];

  type ItemProps = {
    title: string;
    description: string;
  };

  const Item = ({ title, description }: ItemProps) => (
    <View className="w-72 bg-lime-600 p-4 rounded-lg mb-6 shadow-lg">
      <Text className="text-white text-lg font-bold text-center">{title}</Text>
      <Text className="text-white text-center">{description}</Text>

      <View className="flex flex-row justify-around mt-3">
        <TouchableOpacity>
          <Text className="text-black font-semibold">Update</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="text-black font-semibold">Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View className="flex-1 bg-white pt-10 items-center">
      <Text className="font-bold text-xl mb-6">Task</Text>

      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} description={item.description} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </View>
  );
}