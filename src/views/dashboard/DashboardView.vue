<template>
    <h2>這是後台</h2>
    <nav>
        <RouterLink to="/admin/products">產品列表</RouterLink> |
        <RouterLink to="/admin/order">訂單列表</RouterLink> |
        <RouterLink to="/">回到前台</RouterLink>
    </nav>
    <RouterView></RouterView>
</template>

<script>
import axios from 'axios';

const { VITE_URL } = import.meta.env;
// const { VITE_NAME } = import.meta.env;

export default {
  methods: {
    //  先驗證 在取資料
    checkAdmin() {
      axios.post(`${VITE_URL}/api/user/check`)
        .then(() => {
          // console.log('驗證成功：', res.data.success);
        })
        .catch(() => {
          alert('還沒登入請先登入');
          this.$router.push('/login');
          // 回到 登入頁面
        });
    },
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    axios.defaults.headers.common.Authorization = token;
    // 先 check 再取資料
    this.checkAdmin();
  },
};
</script>
