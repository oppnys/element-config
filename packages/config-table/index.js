import elementConfTable from './src/element-config-table'

// 为组件提供 install 安装方法，供按需引入
elementConfTable.install = function (Vue) {
    Vue.component(elementConfTable.name, elementConfTable)
}

// 默认导出组件
export default elementConfTable