import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Todo from "./components/Todo";

export default function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}
