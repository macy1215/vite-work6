<template>
    <h2>登入頁面</h2>
    <div class="container">
        <div class="row justify-content-center">
        <h1 class="h3 mb-3 font-weight-normal">
            請先登入
        </h1>
            <div class="col-8">
                <form id="form" class="form-signin">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="usernameInput"
                        placeholder="name@example.com" required autofocus
                        v-model.lazy="user.username">
                        <label for="usernameInput">Email address</label>
                    </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="passwordInput"
                    placeholder="Password" required v-model.lazy="user.password">
                    <label for="passwordInput">Password</label>
                </div>
                <button class="btn btn-lg btn-primary w-100 mt-3" @click="login"
                type="button" id="loginBtn">
                    登入
                </button>
                </form>
            </div>
        </div>
        <p class="mt-5 mb-3 text-muted">
            &copy; 2021~∞ - 六角學院
        </p>
    </div>
</template>

<script>
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login() {
      axios.post(`${VITE_URL}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data; // 解構 將token 跟時間抓到
          //   console.log(token, expired);
          document.cookie = `hexVueToken=${token}; expires=${expired}`;
          this.$router.push('/admin/products');
        })
        .catch(() => {
          alert('登入失敗');
        });
    },
  },
  mounted() {
    console.log(this.$router, this.$route);
  },
};
</script>
