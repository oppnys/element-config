import elementConfForm, { FormType } from "./config-form/index.js";
import elementConfTable from './config-table/index.js';

// 存储组件列表
const components = [elementConfForm, elementConfTable];
const install = function (Vue) {
    // 判断是否安装
    if (install.installed) return;
    // 遍历注册全局组件
    components.forEach(component => {
        Vue.component(component.name, component)
    });
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}
export default {
    install,
    // 以下是具体的组件列表
    elementConfForm,
    FormType,
    elementConfTable,
};