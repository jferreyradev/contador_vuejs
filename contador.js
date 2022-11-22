var app = new Vue({
    el: '#app',
    data: {
        title: 'Contador con Vue!',
        count: 0
    },
    methods: {
        inc() {
            this.count++
        },
        dec() {
            this.count--
        }
    }
})