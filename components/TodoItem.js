import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function TodoItem({
  id,
  title,
  completed,
  changeTodoStatus,
  deleteTodoItem,
}) {
  return (
    <View style={styles.todoItemWrapperStyle}>
      <TouchableOpacity
        style={styles.checkBoxStyle}
        onPress={() => changeTodoStatus(id)}
      >
        <View style={styles.checkBoxPostion}>{completed && checkedIcon}</View>
      </TouchableOpacity>
      <Text
        style={
          completed ? styles.completedTextStyle : styles.uncompletedTextStyle
        }
      >
        {title}
      </Text>
      <View style={styles.deleteIconPostion}>
        <TouchableOpacity
          style={styles.deleteIconStyle}
          onPress={() => deleteTodoItem(id)}
        >
          <View style={styles.deleteIconRight}></View>
          <View style={styles.dleeteIconLeft}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const checkedIcon = (
  <View
    style={{
      position: "relative",
      marginLeft: 20,
      transform: [{ rotate: "315deg" }],
    }}
  >
    <View
      style={{
        position: "absolute",
        height: 6,
        width: 2,
        backgroundColor: "#1b7e7e",
        borderRadius: 1,
        transform: [{ translateX: -5 }, { translateY: 5 }],
      }}
    ></View>
    <View
      style={{
        position: "absolute",
        height: 10,
        width: 2,
        backgroundColor: "#1b7e7e",
        borderRadius: 1,
        transform: [{ rotate: "90deg" }, { translateX: 5 }],
      }}
    ></View>
  </View>
);

const styles = StyleSheet.create({
  todoItemWrapperStyle: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: 273,
    marginVertical: 6,
  },
  checkBoxStyle: {
    height: 15,
    width: 15,
    backgroundColor: "#d6f0f0",
    borderRadius: 6,
    marginHorizontal: 16,
    position: "relative",
  },
  checkBoxPostion: {
    position: "absolute",
    right: "50%",
    transform: [{ translateX: -6 }],
  },
  completedTextStyle: { color: "#cfcfcf", textDecorationLine: "line-through" },
  uncompletedTextStyle: { color: "#1b7e7e" },
  deleteIconPostion: { position: "absolute", right: 24, top: "50%" },
  deleteIconStyle: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: 20,
    width: 20,
    marginLeft: 26,
    transform: [{ translateY: -10 }],
  },
  deleteIconRight: {
    position: "absolute",
    height: 12,
    width: 2,
    backgroundColor: "#1b7e7e",
    borderRadius: 1,
    transform: [{ rotate: "45deg" }],
  },
  dleeteIconLeft: {
    position: "absolute",
    height: 12,
    width: 2,
    backgroundColor: "#1b7e7e",
    borderRadius: 1,
    transform: [{ rotate: "135deg" }],
  },
});
