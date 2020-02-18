<template>
  <div>
    <form v-on:submit.prevent="addTodo">
      <input
        type="text"
        name="item"
        v-model="title"
        placeholder="Things to do..."
      />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import uuid from "uuid";

export default {
  name: "AddItem",
  data() {
    return {
      title: ""
    };
  },
  methods: {
    addTodo() {
      const newItem = {
        id: uuid.v4(),
        title: this.title,
        completed: false
      };

      this.$emit("add-item", newItem);

      this.title = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input {
  flex: 8;
  padding: 5px;
}

button {
  flex: 2;
}

button {
  background: #00adb5;
  color: #eee;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background: #037980;
}
</style>
