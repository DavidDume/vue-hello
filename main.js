const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Ciao Mondo',
      img: 'https://images.unsplash.com/photo-1678719510338-f37390296951?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
    }
  }
}).mount('#app')