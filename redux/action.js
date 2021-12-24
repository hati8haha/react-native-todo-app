const ActionTypes = {
  ADD_TODO: "add",
  DELETE_TODO: "delete",
  CHANGE_TODO_STATUS: "change_status",
  CHANGE_FILTER: "change_filter",
};

function addTodo(name) {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      name: name,
      completed: false,
    },
  };
}

function deleteTodo(id) {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: {
      id: id,
    },
  };
}

function changeStatus(id) {
  return {
    type: ActionTypes.CHANGE_TODO_STATUS,
    payload: {
      id: id,
    },
  };
}

function changeFilter(filter) {
  return {
    type: ActionTypes.CHANGE_FILTER,
    payload: {
      filter,
    },
  };
}

export { ActionTypes, addTodo, deleteTodo, changeStatus, changeFilter };
