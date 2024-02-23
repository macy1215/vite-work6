<template>
  <h2 class="my-3">這是前台</h2>
  <nav class="navbar navbar-expand-lg bg-body-tertiary mb-3">
      <div class="container-fluid">
          <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul class="navbar-nav">
                  <li class="nav-item">
                      <RouterLink to="/" class="nav-link active"
                          aria-current="page">首頁</RouterLink>
                  </li>
                  <li class="nav-item">
                      <RouterLink to="/products" class="nav-link">產品清單</RouterLink>
                  </li>
                  <li class="nav-item">
                      <RouterLink to="/cart" class="nav-link" >購物車清單</RouterLink>
                  </li>
                  <li class="nav-item">
                      <RouterLink to="/admin/products" class="nav-link" >後台 - 產品列表</RouterLink>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  <RouterView></RouterView>
</template>

<script>

export default {

};
</script>

<style scoped>
</style>
