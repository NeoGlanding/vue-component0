const app = Vue.createApp({
    data() {
        return {
            test: 'yoo'
        }
    }
});

app.component('test-component', {
    data() {
        return {
            message: 'this is from test component'
        }
    },
    template: `<div>
    {{ message }}
    </div>
    `
})

app.mount('#root')