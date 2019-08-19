<template>
  <div id="app" class="container">
    <div class="row">
      <Menu></Menu>
      <div class="col-md-8">
        <div class="row">
          <div :key= "meals.id" class="col-md-6" v-for="meal in filteredMeals">
           <meal :isAdded="isAdded(meal)" v-on:add-to-cart="addToCart(meal)" :meal="meal" ></meal>
          </div>
        </div>
      </div>
      <div class="col-md-4 my-2">
        <cart v-on:pay="pay()" v-on:clearCart="clearCart()" v-on:remove-from-cart="removeItem($event)" :items="cart"></cart>
      </div>
    </div>
  </div>
</template>

<script>

import meals from '@/meals.json'

import Cart from '@/components/Cart.vue'

import Meal from '@/components/Meal.vue'

import Menu from '@/components/Menu.vue'

export default {
  name: 'app',
  components: {
    Meal,
    Cart,
    Menu
  },
  data(){
    return {
      meals ,
      cart: [],
      search: ''
    }
  },
  methods: {
    addToCart(meal){
      this.cart.push(meal)
    },
    isAdded(meal){
      const item = this.cart.find(item => item.id === meal.id )

      if (item) {
        return true
      }
      
      return false
    },
    removeItem(meal){
      this.cart = this.cart.filter(item => item.id !== meal.id)
    },
    pay(){
      this.cart = []
      alert('Done')
    },
    clearCart(){
      this.cart = []
      alert('Done')
    }
  },
  computed: {
    filteredMeals: function(){
      return this.meals.filter((meal)=> {
        return meal.title.match(this.search)
      })
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');

*{
  border-radius: 0 !important;
  font-family: Poppins;
}

</style>
