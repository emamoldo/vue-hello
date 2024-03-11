console.log('helloo');

const { createApp } = Vue;

createApp({
    data() {
        return{
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laborum ullam et fugit natus placeat eveniet eius veritatis tenetur accusamus?'
        }
    }
}).mount('#message');