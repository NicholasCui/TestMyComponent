<template>
  <div id="app">
    <my-button @click="clickFunc">
      button
    </my-button>
    <my-button @click="toastFunc">
      toast
    </my-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    clickFunc () {
      alert('click')
    },
    toastFunc () {
      this.$myui.toast.show({
        text: '成功了~'
      })
    }
  }
}
</script>

<style>
</style>
