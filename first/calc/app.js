let app = new Vue({
    el: `#app`,
    data: {
        a: 0,
        b: 0,
        operator: null,
    },
    computed: {
        answer() {
            return eval(this.a + this.operator + this.b);
        }
    }
});
