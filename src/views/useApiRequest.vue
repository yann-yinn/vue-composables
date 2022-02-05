<script setup lang="ts">
import useApiRequest from "@/composables/useApiRequest";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Todo {
  title: string;
  completed: boolean;
  userId: number;
  id: number;
}

const usersRequest = useApiRequest<User[]>(
  "https://jsonplaceholder.typicode.com/users"
);
usersRequest.execute();

const todosRequest = useApiRequest<Todo[]>(
  "https://jsonplaceholder.typicode.com/todos"
);
todosRequest.execute();
</script>

<template>
  <h1>Users</h1>
  <div v-if="usersRequest.state.state === 'PENDING'">Chargement</div>
  <div v-if="usersRequest.state.state === 'SUCCESS'">
    <div v-for="user in usersRequest.state.data" :key="user.id">
      {{ user.name }}
    </div>
  </div>
  <h1>Todos</h1>
  <div v-if="todosRequest.state.state === 'PENDING'">Chargement</div>
  <div v-if="todosRequest.state.state === 'SUCCESS'">
    <div v-for="todo in todosRequest.state.data" :key="todo.id">
      {{ todo.title }}
    </div>
  </div>
</template>
