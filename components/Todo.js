import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import TodoItem from "./TodoItem";
import {
  addTodo,
  changeStatus,
  deleteTodo,
  changeFilter,
} from "../redux/action";
export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const todoStatus = ["all", "completed", "uncompleted"];
  function newTodo() {
    if (text === "") return;
    dispatch(addTodo(text));
    setText("");
  }
  function changeTodoStatus(id) {
    dispatch(changeStatus(id));
  }
  function deleteTodoItem(id) {
    dispatch(deleteTodo(id));
  }
  function handleChangeFilter(filterName) {
    dispatch(changeFilter(filterName));
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25, fontWeight: "bold", marginBottom: 50 }}>
        Get your things done.
      </Text>
      <SelectDropdown
        data={todoStatus}
        onSelect={(selectedItem, index) => {
          handleChangeFilter(selectedItem);
        }}
        defaultButtonText={"All"}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
        renderDropdownIcon={(isOpened) => {
          return (
            <FontAwesome
              name={isOpened ? "chevron-up" : "chevron-down"}
              color={"#444"}
              size={10}
            />
          );
        }}
        dropdownIconPosition={"left"}
        buttonStyle={styles.dropdownBtnStyle}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
      />
      <View style={{ position: "relative", marginBottom: 35 }}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Add a task..."
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <View style={styles.addTodoIconPostion}>
          <TouchableOpacity
            style={styles.addTodoIconStyle}
            onPress={() => newTodo()}
          >
            <View style={styles.addTodoIconRight}></View>
            <View style={styles.addTodoIconLeft}></View>
          </TouchableOpacity>
        </View>
      </View>

      {filter === "completed" &&
        todos.map((todo) => {
          if (todo.completed === false) return;
          return (
            <TodoItem
              id={todo.id}
              key={todo.id}
              title={todo.name}
              completed={todo.completed}
              changeTodoStatus={changeTodoStatus}
              deleteTodoItem={deleteTodoItem}
            />
          );
        })}
      {filter === "uncompleted" &&
        todos.map((todo) => {
          if (todo.completed === true) return;
          return (
            <TodoItem
              id={todo.id}
              key={todo.id}
              title={todo.name}
              completed={todo.completed}
              changeTodoStatus={changeTodoStatus}
              deleteTodoItem={deleteTodoItem}
            />
          );
        })}
      {filter === "all" &&
        todos.map((todo) => {
          return (
            <TodoItem
              id={todo.id}
              key={todo.id}
              title={todo.name}
              completed={todo.completed}
              changeTodoStatus={changeTodoStatus}
              deleteTodoItem={deleteTodoItem}
            />
          );
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 40 : 40,
  },
  inputStyle: {
    height: 40,
    backgroundColor: "#f9f9f9",
    borderRadius: 30,
    width: 273,
    padding: 13,
  },
  dropdownBtnStyle: { backgroundColor: "#fff" },
  dropdownBtnTxtStyle: { fontSize: 14 },
  dropdownDropdownStyle: { backgroundColor: "#EFEFEF", borderRadius: 8 },
  dropdownRowTxtStyle: { fontSize: 14 },
  addTodoIconPostion: { position: "absolute", right: 24, top: "50%" },
  addTodoIconStyle: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: 20,
    height: 20,
    transform: [{ translateY: -10 }],
  },
  addTodoIconRight: {
    position: "absolute",
    height: 12,
    width: 2,
    backgroundColor: "#1b7e7e",
    borderRadius: 1,
  },
  addTodoIconLeft: {
    position: "absolute",
    height: 12,
    width: 2,
    backgroundColor: "#1b7e7e",
    borderRadius: 1,
    transform: [{ rotate: "90deg" }],
  },
});
