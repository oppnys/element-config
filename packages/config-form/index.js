import elementConfForm from './src/element-conf-form.vue'

import formType from './src/formType'

// 为组件提供 install 安装方法，供按需引入
elementConfForm.install = function (Vue) {
    Vue.component(elementConfForm.name, elementConfForm)
}

export const FormType = formType

// 默认导出组件
export default elementConfForm