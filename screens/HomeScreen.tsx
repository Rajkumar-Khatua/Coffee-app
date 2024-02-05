import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useStore } from "../store/store";

const getCategories = (data) => {
  const temp = [];
  for (let i = 0; i < data.length; i++) {
    if (!temp.includes(data[i].category)) {
      temp.push(data[i].category);
    }
  }
  return temp;

  let categories = Object.keys(temp);
  categories.unshift("All");
  return categories;
};

const HomeScreen = () => {
  const CoffeeList = useStore((state) => state.CoffeeList);
  const BeansList = useStore((state) => state.BeansList);

  const [categories, setCategories] = useState(getCategories(CoffeeList));
  const [searchText, setSearchText] = useState([undefined]);
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });

  const [sortedCoffeeList, setSortedCoffeeList] = useState(undefined);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dddddd",
    alignItems: "center",
    justifyContent: "center",
  },
});
