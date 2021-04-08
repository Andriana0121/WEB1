let app = new Vue({
    el: `#app`,
    data: {
        a: 0,
        b: 0,
        operator: null,
    },
    computed: {
        calculate() {
            return eval(this.first + this.operator + this.second);
        }
    }
});