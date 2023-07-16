<template>
    <div class="button-container">
      <button class="show-layer-button" @click="$emit('click')">{{text}}</button>
    </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String
    },
    data() {
        return {
            show: false
        }
    },
    computed: {
        onClick() {
            this.$emit('click')
        }
    }
}
</script>

<style>
.show-layer-button {
  padding: 8px;
  background-color: rgb(110, 241, 198);
  cursor: pointer;
  border-radius: 5px;
  border-color:rgb(96, 170, 145);
  box-shadow: 2px;
  transition: 0.3s;
  font-size: 14px;
  font-weight: 600;
}

.show-layer-button:hover {
  background-color: rgb(96, 196, 161);
  transition: 0.3s;

}

.button-container {
  margin-bottom: 20px;
}
</style>