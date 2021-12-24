import { ActionTypes } from "./action";

const initialState = {
  todos: [],
  filter: "all",
};
let todoId = 0;

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: todoId++,
            name: action.payload.name,
            completed: action.payload.completed,
          },
        ],
      };
    }
    case ActionTypes.DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case ActionTypes.CHANGE_TODO_STATUS: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload.id) return todo;
          return { ...todo, completed: !todo.completed };
        }),
      };
    }
    case ActionTypes.CHANGE_FILTER: {
      return {
        ...state,
        filter: action.payload.filter,
      };
    }
  }

  return state;
}
