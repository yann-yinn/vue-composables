<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/use-scroll-end-detection">
          useScrollEndDetection
        </RouterLink>
        |
        <RouterLink to="/use-api-request"> useApiRequest </RouterLink> |
        <RouterLink to="/use-mouse"> useMouse </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
