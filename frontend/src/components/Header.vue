<template>
  <div class="header">
    <div class="container">
      <div class="flex">
        <a class="header__brand" href="#"><img src="../assets/header-logo.png" height="34" alt="Logo"></a>
        <input @focus="showModal = true" type="text" class="header__search" placeholder="Search a brand, company or persona">
        <nav class="header__navmenu">
          <li><a href="#"><img src="../assets/icons/people.svg" alt="Network" height="18"><span>People</span></a></li>
          <li><a href="#"><img src="../assets/icons/companies-white.svg" alt="Network" height="18"><span>Companies</span></a></li>
          <li><a href="#"><img src="../assets/icons/jobs-white.svg" alt="Network" height="18"><span>Jobs</span></a></li>
          <li><a href="/tasks"><img src="../assets/icons/notification-white.svg" alt="Network" height="18"><span>Notifications</span></a></li>
        </nav>
      </div>
    </div>
    <div v-if="showModal" @click="showModal = false" class="black-modal">
      <div class="container">
        <ul class="search-options">
          <li><a href="#">People</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Brands</a></li>
          <li><a href="#">Companies</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showModal: false
    }
  }
}
</script>

<style lang="scss" scoped>
$main-color: rgba(40,62,74,.75);
.header {
  padding: .6em 0;
  background: #283e4a;
  a {
    color: #fff;
  }
  .header__brand {
    img {
      float: left;
    }
  }
  .header__search {
    height: 34px;
    border-radius: 2px;
    border: none;
    padding: 0 .7rem;
    background: #e1e9ee;
    color: $main-color;
    outline: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    min-width: 320px;
    font-size: .9rem;
  }

  .header__navmenu {
    margin-left: auto;
    li {
      display: inline-block;
      line-height: 34px;
      margin-left: 1.25rem;
      a {
        opacity: .7;
        display: flex;
        flex-direction: column;
        transition: ease all .3s;
        &:hover {
          opacity: 1;
        }

        img {
          margin-right: .5rem;
        }
        span {
          line-height: 1;
          font-weight: 500;
          font-size: .8rem;
          margin-top: 5px;
        }
      }
    }
  }

  .black-modal {
    position: absolute;
    left: 0;
    top: 53px;
    width: 100%;
    height: calc(100% - 50px);
    background: rgba(0, 0, 0, .4);

    .search-options {
      background: #fff;
      padding: .6rem 0;
      margin: 0;
      list-style: none;
      li {
        display: inline-block;
        a {
          color: $main-color;
          transition: ease all .3s;
          margin-left: .8rem;
          font-weight: 600;
          border: 1.5px solid transparent;
          border-radius: 2px;
          padding: .1rem .5rem;
          &:hover {
            border-color: $main-color;
          }
        }
      }
    }
  }
}

.flex {
  display: flex;

  nav {
    margin-left: auto;
  }
}
</style>
