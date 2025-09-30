<template>
  <div>
    <Breadcrumb :items="breadcrumbItems" />
    <h1>News</h1>
  </div>
</template>

<script setup lang="ts">
const breadcrumbItems = [{ label: "お知らせ" }];
</script>

<style scoped></style>
