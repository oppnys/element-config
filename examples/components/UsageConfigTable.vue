<template>
  <div class="app-container">
    <element-config-table :label-data="labelData" :table-data="tableData">
      <template slot="op">
        <el-button size="mini" type="primary">修改</el-button>
      </template>
    </element-config-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelData: [
        { property: 'name', label: '名称' },
        { property: 'sex', label: '性别' },
        { property: 'age', label: '年龄' },
        { property: 'op', label: '操作', slot: 'op' }
      ],
      tableData: [
        { name: '小明', sex: '男', age: 12 },
        { name: '小红', sex: '女', age: 10 },
        { name: '韩梅梅', sex: '女', age: 12 }
      ]
    }
  }
}
</script>

<style>
</style>