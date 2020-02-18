<template>
  <div class="container">
    <div v-for="item in todos" :key="item.id">
      <TodoItem :todo="item" v-on:del-item="$emit('del-item', item.id)" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoList",
  props: ["todos"],
  components: {
    TodoItem
  }
};
</script>
