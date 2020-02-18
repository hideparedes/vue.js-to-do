<template>
  <div id="app">
    <Header />
    <div class="container">
      <AddItem v-on:add-item="addItem" />
      <TodoList :todos="todos" v-on:del-item="deleteItem" />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    Header,
    AddItem,
    TodoList
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Learn how to use Vue.js",
          completed: false
        },
        {
          id: 2,
          title: "Drink coffe",
          completed: true
        },
        {
          id: 3,
          title: "Watch all episodes of The Mandalorian",
          completed: false
        }
      ]
    };
  },
  methods: {
    addItem(newItem) {
      this.todos = [...this.todos, newItem];
    },
    deleteItem(id) {
      this.todos = this.todos.filter(item => item.id !== id);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  width: 500px;
  margin: 0 auto;
}
</style>
