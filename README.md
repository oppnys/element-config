# element-config Usage

## 下载依赖
```
npm i element-config --save-dev
```

## 全局注入

```
// 需要安装element-ui

import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(element)
Vue.prototype.FormType = elementConfig.FormType

// 注入element-config
import elementConfig from 'element-config'
Vue.use(elementConfig)
```

## Table的使用

```
<template>
  <div class="app-container">
    <element-conf-table :label-data="labelData" :table-data="tableData">
      <template slot="op">
        <el-button size="mini" type="primary">修改</el-button>
      </template>
    </element-conf-table>
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
```

## Form的使用

```
<template>
  <div class="hello">
    <element-conf-form ref="searchForm" :forms="forms" inline />
  </div>
</template>

<script>
export default {
  name: 'UsageConfigForm',
  props: {
    msg: String
  },
  data() {
    return {
      forms: [
        {
          type: this.FromType.INPUT,
          property: 'name',
          label: '名字',
          value: '',
          labelWidth: 80,
          attrs: {
            placeholder: '请输入',
            clearable: true
          }
        },
        {
          type: this.FromType.SELECT,
          property: 'sex',
          label: '性别',
          value: '',
          attrs: {
            placeholder: '请选择'
          },
          options: [
            { label: '男', value: 1 },
            { label: '女', value: 2 }
          ]
        },
        {
          type: this.FromType.BUTTON,
          buttons: [
            {
              value: '确定',
              validate: true,
              handle: this.search,
              attrs: {
                type: 'primary',
                icon: 'el-icon-search'
              }
            },
            {
              value: '重置',
              validate: false,
              handle: this.reset,
              attrs: {
                type: 'danger',
                icon: 'el-icon-refresh-left'
              }
            }
          ]
        }
      ]
    }
  },
  methods: {
    search(params) {
      alert(JSON.stringify(params, null, 3))
    },
    // 重置
    reset() {
      this.$refs.searchForm.clearForm()
    }
  }
}
</script>
```
