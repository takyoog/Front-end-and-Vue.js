new Vue({
    el: '#app',
    
    data: {
        kmh: 0,
        ms: 0
    },
    
    watch: {
        kmh: function(newKmh) {
            this.ms = newKmh / 3.6;
        },
        
        ms: function(newMs) {
            this.kmh = newMs * 3.6;
        }
    }
});