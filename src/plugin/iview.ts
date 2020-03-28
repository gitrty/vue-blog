import Vue from 'vue';
import 'iview/dist/styles/iview.css';    // iview.css 全局引入
import {
    Checkbox,
    Button,
    Menu,
    MenuItem,
    Breadcrumb,
    BreadcrumbItem,
    Icon,
    Input,
    BackTop,
    Card,
    Tabs,
    TabPane
} from 'iview';

Vue.component('Checkbox', Checkbox);
Vue.component('Button', Button);
Vue.component('iButton', Button);
Vue.component('Menu', Menu);
Vue.component('MenuItem', MenuItem);
Vue.component('Breadcrumb', Breadcrumb);
Vue.component('BreadcrumbItem', BreadcrumbItem);
Vue.component('Icon', Icon);
Vue.component('iInput', Input);
Vue.component('BackTop', BackTop);
Vue.component('Card', Card);
Vue.component('Tabs', Tabs);
Vue.component('TabPane', TabPane);  