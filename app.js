const app = Vue.createApp({
    data() {
      return {
        plants: null
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
  