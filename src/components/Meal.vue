<template>
    <div class="card my-5 mr-3">
        <div class="card-body">
            <img class="card-img-top" src="../assets/img/burger-1.jpg">
            <h5 class="text-center card-title">Meal: {{ meal.title }}</h5>
            <h6  class="text-center text-mute card-text">Price: $ {{ Number(meal.price).toFixed() }}</h6>
            <p style="font-size: 19px;" class="text-center lead card-title">About: {{ meal.desc }}</p>

            <button :disabled="isAdded" @click="$emit('add-to-cart', meal)" class="btn btn-info form-control">
                {{ isAdded ? 'Meal Bought' : 'Buy' }}
            </button>
            
        </div>
    </div>
</template>
<script>
export default {
    props: ['meal', 'isAdded'],
    data(){
        return {
            search: ''
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