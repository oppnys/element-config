<template>
  <div id="app">
    <UsageConfigForm />
    <UsageConfigTable />
  </div>
</template>

<script>
import UsageConfigForm from './components/UsageConfigForm.vue'
import UsageConfigTable from './components/UsageConfigTable.vue'
export default {
  name: 'App',
  components: {
    UsageConfigForm,
    UsageConfigTable
  }
}
</script>

