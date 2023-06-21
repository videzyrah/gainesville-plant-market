const app = Vue.createApp({
    data() {
      return {
        retailers: null
      } 
    },
    mounted: function() {
      fetch('https://gregprojects.fly.dev/retailers/', {
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