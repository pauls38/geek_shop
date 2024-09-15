<template>
  <header id="header-app">
    <img require src="src/assets/svalka.jpg" class="img_logo"  width="100" height="50"  alt="." >
    <input
        type="search"
        name="s"
        maxlength="150"
        class="search"
        spellcheck="false"
        aria-label="Искать товары, новинки и вдохновение"
        aria-placeholder="Искать товары, новинки и вдохновение"
        placeholder="Что вы ищете?"
        autocapitalize="off"
        autocomplete="off"
        autocorrect="off"
    />
    <nav class="header-nav">
      <router-link class="router-link" to="/" data-tooltip="Главная"
      ><fa icon="shop" class="icon-header-nav"  />
      </router-link>
      <router-link  class="router-link" to="/Catalog" data-tooltip="Каталог"
        ><fa icon="align-justify" class="icon-header-nav" />
      </router-link>
      <router-link class="router-link" to="/cart" data-tooltip="Карзина"
        ><fa icon="cart-shopping" class="icon-header-nav" />
      </router-link>
      <router-link class="router-link" to="/form" data-tooltip="Форма"
        ><fa icon="address-card" class="icon-header-nav" />
      </router-link>
    </nav>
  </header>
</template>
<script>
export default {
  name: "header-app",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  padding: 5px;
  top: -30px;
  left: -20px;
  width: 70px;
  color: #d8380e;
  height: 20px;
  font-size: 14px;
  opacity: 0;
  transition: 0.3s;
  //border: 1px solid black;

}

.router-link:hover[data-tooltip]::after {
  opacity: 1;
}

#header-app {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  min-height: 10px;
  background: white;
  //position: fixed;
  //z-index: 99;
  //border: 4px solid red;
}
.header-nav {
  margin: 0 auto;
  width: 100%;
  //min-width: 600px;
  min-height: 100px;
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: space-around;
  // border: 1px solid black;
}
input[type="search"]::-webkit-search-cancel-button {
  display: none;
}
.router-link {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  text-decoration: none;
  margin-left: 30px;
  margin-top: 20px;
  color: black;
  font-family: "Source Sans Pro", sans-serif;
  font-style: normal;
  font-weight: 600;
  height: 20px;
  width: 20px;
  //border: 1px solid black;
  //font-size: 26px;
  // background-color: #ffffff;
  padding: 5px;
  border-radius: 4px 4px;
  //box-shadow: 0 2px 1px 1px black;
  .icon-header-nav {
    position: absolute;
    top: 5px;
    left: 0;
    width: 30px;
    height: 20px;
    //transform: scale(1);
    line-height: 20px;
    //margin: 0 0 0 5px;
    padding: 0;
    border: none;
  }
  //.icon-header-nav:hover {
  //  color: red;
  //}
}

//.router-link:hover {
//   background-color: #f1f4f3;
//   box-shadow: 0 2px 1px 1px darkgray;
//   color: #3f3f3f;
//   transition: 0.5s;
//}
.router-link:hover .icon-header-nav {
  color: #fc816c;
  border: none;

}

//.router-link:active {
//   box-shadow: 0 1px 0 1px gray;
//   background-color: #e5e5e5;
//   transition: 0.2s;
//}

.search {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: #f5f5f5;
  display: block;
  appearance: none;
  // width: 100%;
  // height: 100%;
  padding: 0.5rem 15.5rem 0.5rem 5.5rem;
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 0;
  // margin: 0 auto;
  line-height: 1.5;
  border: 0;
  border-radius: 50em;
  outline: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  -webkit-transition: background 0.2s;
  -o-transition: background 0.2s;
  transition: background 0.2s;
}

.img_logo {
  width: 190px;
  height: 80px;
  //border: 1px solid black;
  background-image: url("../assets/svalka.jpg");
  background-position: 40px 27px;
  background-repeat: no-repeat;
  background-size: contain;
}
@media (max-width: 1000px) {
  .header-app {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
}
@media (max-width: 980px) {
  #header-app {
    height: 230px;
    align-items: flex-end;
    flex-direction: column;
  }
  .search {
    margin: 0 auto;
  }
  .img_logo {
    //border: 1px solid black;
    margin: 10px auto;
    height: 50px;
    line-height: 90px;
    background-position: 40px -5px;

  }
  .header-nav {
    width: 350px;
    height: 160px;
    flex-direction: row;
    margin: 10px auto;
  }

  .router-link {
    align-self: center;
    margin: 5px 0 0 0;
  }
}
//@media (max-width: 856px) {
//
//}
//@media (max-width: 670px) {
//  .router-link {
//    align-self: center;
//  }
//}
//@media (max-width: 500px) {

//  .header-nav {
//    flex-direction: row;
//    height: 50px;
//    min-width: 200px;
//    margin: 0 0 0 35px;
//  }
//  .router-link {
//    align-self: start;
//    margin: 5px;
//  }
//}
//@media (max-width: 400px) {
//  #header-app {
//    min-height: 100px;
//  }
//  .header-nav {
//    height: 50px;
//  }
//}
</style>
