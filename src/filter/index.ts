
export default {
    install(Vue: any) {
        // 文字超出指定长度后省略
        Vue.filter('ellipsis', (val: string, num: number) => val.length > num ? val.slice(0, num) + '...' : val)
    }
}

