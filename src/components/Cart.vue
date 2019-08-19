<template>
  <div>
     <ul class="list-group">
       <h3 class="text-center">Your Cart</h3>
        <h6 class="list-group-item" v-for="item in items" :key="item.id">
           {{ item.title }} - $ {{item.price}}
           <transition name="alert-in">
             <button @click="$emit('remove-from-cart', item)" class="btn btn-danger btn-sm float-right ">Remove Meal</button>
           </transition>
        </h6>
        <button v-on:clearCart="clearCart()" class="btn btn-primary" :items="meal">Clear Cart</button>
   </ul>
   <div class="card p-3 my-5">
       <h6 class="text-center">Your Carty Is Empty</h6>
        <h5 class="text-center">Total : ${{ total }}</h5>
   </div>
   <button :disabled="items.length === 0" @click="$emit('pay')" class="btn btn-success form-control">Order Now</button>
  </div>
</template>
<script>
export default {
    props: ['items', 'meal'],
    computed: {
        total(){
            return this.items.reduce((acc, item) => acc + Number(item.price), 0)
        }
    },
    methods: {
        removeItem(meal){
      this.cart = this.cart.filter(item => item.id !== meal.id)
    },
    clearCart(){
      this.cart = []
      alert('Done')
    }
    }
}
</script>
<style>
.alert-in-enter-active{
    animation: bounce-in .5s;
}
.alert-in-leave-active{
    animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
}
</style>