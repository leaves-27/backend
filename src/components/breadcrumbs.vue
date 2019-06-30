<template>
  <Breadcrumb :style="{margin: '24px 0', textAlign: 'left' }">
      <BreadcrumbItem v-for="item in breadcrumbs">{{ item.name }}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
export default {
  props: {
    breadcrumbs: Array
  }
}
</script>
<style scoped>

</style>
