<template>
  <div class="header">
    <div class="container">
      <div class="flex">
        <a class="header__brand" href="#"><img src="../assets/header-logo.png" height="34" alt="Logo"></a>
        <input type="text" class="header__search" placeholder="Search a brand, company or persona">
        <nav></nav>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    color: rgba(40,62,74,.75);
    outline: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    min-width: 320px;
    font-size: .9rem;
  }
}

.flex {
  display: flex;

  nav {
    margin-left: auto;
  }
}
</style>
