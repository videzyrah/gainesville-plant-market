const app = Vue.createApp({
    data() {
      return {
        retailers: null
      } 
    },
    mounted: function() {
      fetch('https://gstulldjangorestapi.herokuapp.com/retailers/', {
        method: 'get'
      })
      .then((response) => {
        return response.json()
      })
      .then(data => {
        this.retailers = data;
      })
    }
  })
  
  app.mount('#app')