<script setup lang="ts">
import useApiRequest from "@/composables/useApiRequest";
import type { JsonPlaceholderUser } from "@/types";

const usersRequest = useApiRequest<JsonPlaceholderUser[]>(
  "https://jsonplaceholder.typicode.com/users"
);
usersRequest.execute();
</script>

<template>
  <h1>Users</h1>
  <div v-if="usersRequest.error.value">{{ usersRequest.error.value }}</div>
  <div v-if="usersRequest.state.value === 'PENDING'">Chargement</div>
  <div v-if="usersRequest.state.value === 'SUCCESS'">
    <div v-for="user in usersRequest.data.value" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>
