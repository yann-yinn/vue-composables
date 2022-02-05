<script setup lang="ts">
import useApiRequest from "@/composables/useApiRequest";
import type { JsonPlaceholderUser } from "@/types";

const { state, error, data, execute } = useApiRequest<JsonPlaceholderUser[]>(
  "https://jsonplaceholder.typicode.com/users"
);
execute();
</script>

<template>
  <h1>Users</h1>
  <div v-if="error">{{ error }}</div>
  <div v-if="state === 'PENDING'">Chargement</div>
  <div v-if="state === 'SUCCESS'">
    <div v-for="user in data" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>
