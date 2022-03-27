<template>
  <footer class="footer">
    <div class="footer_container_p">
      <div class="p">
        <h4 class="info_title">Каталог товаров</h4>
        <ul class="info_list">
          <li><a href="#" class="info_link">Струнные</a></li>
          <li><a href="#" class="info_link">Духовые</a></li>
          <li><a href="#" class="info_link">Язычковые</a></li>
          <li><a href="#" class="info_link">Ударные</a></li>
          <li><a href="#" class="info_link">Клавишные</a></li>
          <li><a href="#" class="info_link">Механические</a></li>
          <li><a href="#" class="info_link">Электромузыкальные</a></li>
        </ul>
      </div>
      <div class="p">
        <h4 class="info_title">О нас для Вас</h4>
        <ul class="info_list">
          <li><a href="#" class="info_link">О компании</a></li>
          <li><a href="#" class="info_link">Наши магазины</a></li>
          <li><a href="#" class="info_link">Рекрутинг</a></li>
          <li><a href="#" class="info_link">Новости отрасли</a></li>
          <li><a href="#" class="info_link">Юмор</a></li>
        </ul>
      </div>
      <div class="p">
        <h4 class="info_title">Связаться с нами просто</h4>
        <ul class="info_list">
          <li><a href="#" class="info_link">Обратная связь</a></li>
          <li><a href="#" class="info_link">Контакты</a></li>
          <li><a href="#" class="info_link">Карта</a></li>
          <li><a href="#" class="info_link">Поставщикам</a></li>
          <li><a href="#" class="info_link">Пресс-служба</a></li>
          <li><a href="#" class="info_link">Вопросы-ответы</a></li>
        </ul>
      </div>
    </div>
    <div class="icons_container">
      <i>
        <img src="../../dist/fontello-icons/social/twitter.svg" />
      </i>
      <i>
        <img src="../../dist/fontello-icons/social/vk.svg" />
      </i>
      <i>
        <img src="../../dist/fontello-icons/social/ok.svg" />
      </i>
      <i>
        <img src="../../dist/fontello-icons/social/tiktok.svg" />
      </i>
      <i>
        <img src="../../dist/fontello-icons/social/youtube.svg" />
      </i>
    </div>

    <span class="span_copyright"
      >Copyright &#169; 2022.<i class="icon-spin5"></i
    ></span>
  </footer>
</template>

<script></script>

<style lang="scss">
.footer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 250px;
  background: #4e3e38;
  border: 4px solid blue;
}

.footer_container_p {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  min-height: 89px;
  border: 1px solid white;

  .p {
    color: grey;
    //text-shadow: 2px 0 3px black;
    margin: 10px 30px;
    padding: 10px;
    width: 300px;
    min-height: 160px;
    border: 1px solid grey;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    box-shadow: 0 3px 6px 1px rgba(255, 255, 255, 19%);
    transition: 0.4s;

    .info_title {
      margin-bottom: 4px;
    }

    .info_list {
      list-style-type: none;
      text-align: left;

      li {
        margin-bottom: 8px;

        &:last-of-type {
          margin-bottom: 0;
        }
      }
    }
    a {
      box-shadow: 0 2px 1px 1px rgba(255, 255, 255, 19%);
      border-radius: 10px;
      outline: none;
      text-decoration: none;
      cursor: pointer;
      margin-top: auto;
      padding: 0 5px;
      color: rgba(243, 229, 169, 0.89);
      width: 70px;
      background-color: rgba(255, 255, 255, 9%);
      transition: 0.4s;
    }
  }

  .p:hover {
    color: white;
    box-shadow: 0 5px 9px 2px white;
    border: 1px solid rgb(252, 13, 13);
  }
  .p:hover a {
    color: green;
    box-shadow: 0 2px 1px 1px rgba(255, 255, 255, 59%);
    background-color: rgba(255, 255, 255, 0.99);
  }
  .p:hover a:active {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    transition: 0s;
    background-color: rgba(255, 255, 255, 49%);
  }
}

.icon-linux {
  color: yellow;
}
.icon-plancast {
  color: white;
}
.icon-firefox {
  color: orange;
}
.icon-chrome {
  color: red;
}
.icon-twitter {
  color: blue;
}
.icon-facebook {
  color: white;
}
.icon-github-circled {
  color: white;
}
.icon-github {
  color: yellowgreen;
}
.icon-apple {
  color: white;
}
.icon-android {
  color: green;
}
.icon-vkontakte {
  color: lightblue;
}
.icon-google {
  color: darkblue;
}
.icon-paper-plane {
  color: white;
}
.icon-odnoklassniki {
  color: orange;
}
.icon-opera {
  color: red;
}
.icon-gitlab {
  color: darkorange;
}

i {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin: 5px;
  transition: 0.3s;
  border: 2px solid rgba(255, 255, 255, 19%);
  border-radius: 50%;

  & > img {
    width: 16px;
    height: 16px;
  }
}

i:hover {
  border: 2px solid rgba(255, 255, 255, 69%);
  transform: scale(1.1);
}

i:active {
  border: 2px solid white;
  color: white;
  transition: 0s;
  box-shadow: 0 1px 16px white;
}

.span_copyright {
  width: 100%;
  color: rgba(255, 255, 255, 19%);
  transition: 1s;
}
.span_copyright:hover {
  color: green;
  transition: 1s;
  letter-spacing: 1em;
}
.icons_container {
  display: flex;
  margin: 16px 0;
  justify-content: center;
  align-items: center;
  width: 100%;
}
@media (max-width: 360px) {
  footer {
    min-width: 360px;
  }
  i {
    margin: 10px 20px;
  }
  .icons_container {
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    margin: 16px auto;
  }
}
</style>
