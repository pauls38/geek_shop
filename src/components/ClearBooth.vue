<template>
  <div class="clear_booth"></div>
</template>
<script>
export default {
  name: 'cleaar booth',
  components: {},
  props: {},
  data() {
    return {
      title: 'Main wrapper'
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log('Hello i am alive')
  }
}

</script>
<style>
.clear_booth {
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  width: 100%;
  min-height: 180px;
  margin: o auto;
}
@media (min-width: 1990px) {
  .clear_booth {
    min-height: 1670px;
  }
}
</style>