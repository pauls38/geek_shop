<template>
   <div class="catalog_list_item">
     <h3 class="Category_title">{{ data.title }}</h3>
   </div>
</template>
<script>
export default {
  name: 'CatalogList',
  props: [
    'data'
  ]
}

</script>
<style>
.catalog_list_item {
  display: flex;
  flex-direction: column;
}
.Category_title {
  width: 400px;
  height: 50px;
  line-height: 50px;
  margin-top: 10px;
  border: 2px solid darkred;
  border-radius: 20px;
  transition: 0.5s;
}
.Category_title:hover {
background-color: #d8380e;
  color: white;
  transition: 0.5s;
}
.Category_title:active {
  background-color: white;
  color: darkred;
  transition: 0.2s;
}
</style>