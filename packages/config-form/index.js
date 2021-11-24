import elementConfForm from './src/element-conf-form.vue'

import fromType from './src/formType'

// 为组件提供 install 安装方法，供按需引入
elementConfForm.install = function (Vue) {
    Vue.component(elementConfForm.name, elementConfForm)
}

export const FromType = fromType

// 默认导出组件
export default elementConfForm