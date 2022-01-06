<template>
  <div class="hello">
    <ElementConfForm ref="searchForm" :forms="forms" inline />
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
          type: this.FormType.INPUT,
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
          type: this.FormType.SELECT,
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
          type: this.FormType.BUTTON,
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