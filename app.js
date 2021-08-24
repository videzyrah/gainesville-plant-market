const app = Vue.createApp({
    data() {
      return {
        maximum: '100',
        wishlist: [],
        plants: null
      } 
    },
    methods : {
      addItem: function(item) {
        this.wishlist.push(item);
      }
    },
    mounted: function() {
      fetch('https://gstulldjangorestapi.herokuapp.com/plants/', {
        method: 'get'
      })
      .then((response) => {
        return response.json()
      })
      .then(data => {
        this.plants = data;
      })
    }
  })
  
  app.mount('#app')
  