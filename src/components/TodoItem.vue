<template>
  <div class="todo-item">
    <p>
      <input
        type="checkbox"
        :checked="todo.completed"
        v-on:click="isCompleted"
      />
      <span :class="{ 'is-completed': todo.completed }">{{ todo.title }}</span>
      <button @click="$emit('del-item', todo.id)">Delete</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    isCompleted() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  padding: 10px;
  background: #eee;
  border-bottom: 1px dotted #000;
}

input[type="checkbox"] {
  border: none;
  cursor: pointer;
}

.is-completed {
  text-decoration: line-through #f64b3c;
}

button {
  border: none;
  border-radius: 5px;
  float: right;
  padding: 5px;
  background-color: #f64b3c;
  color: #eee;
  transition: all 0.3s ease;
  cursor: pointer;
}

button:hover {
  background-color: #c81912;
}
</style>
