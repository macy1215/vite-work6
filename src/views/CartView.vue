<template>
    <h2>這是購物車列表</h2>
    <!-- 購物車列表 -->
    <VueLoading :active="isLoading" />
        <!-- <div class="text-end">
        <button class="btn btn-outline-danger" type="button"
        :disabled="carts.total ===0"
        @click="removeAllCart(carts)">清空購物車</button>
        </div> -->
      <div class="container">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <table class="table align-middle">
                        <thead>
                            <tr>
                                <th></th>
                                <th>品名</th>
                                <th style="width: 180px">數量/單位</th>
                                <th class="text-center">單價</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template
                            v-if="carts.total !== 0">
                            <!-- 資料是 carts 狀態的 carts 資料 -->
                            <tr
                            v-for="cart in carts.carts"
                            :key="cart.id">
                            <td>
                                <button
                                type="button"
                                class="btn btn-outline-danger btn-sm"
                                @click="removeCartItem(cart.id)"
                                :disabled="cart.id === status.cartQtyLoading" >
                                <i class="fas fa-spinner fa-pulse"
                                v-if="cart.id === status.showCartLoading"></i>
                                x
                                </button>
                            </td>
                            <td>
                                {{ cart.product.title }}
                                <div class="text-success">
                                已套用優惠券
                                </div>
                            </td>
                            <td>
                                <div class="input-group input-group-sm">
                                <div class="input-group mb-3">
                                    <button typr="button" class="btn btn-outline-primary"
                                    :disabled="cart.qty ===1"
                                    @click="cart.qty--;changeCartQty(cart,cart.qty)"
                                    v-if="cart.qty >1"
                                    > - </button>
                                    <button
                                    typr="button"
                                    class="btn btn-outline-danger"
                                    v-else
                                    @click="removeCartItem(cart.id)" >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0
                                     0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0
                                      0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0
                                     1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h
                                     2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1
                                     0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                    </svg>
                                    </button>

                                    <input
                                    min="1"
                                    typr="number"
                                    class="form-control"
                                    v-model="cart.qty"
                                    :disabled="cart.id === status.cartQtyLoading" readonly
                                    />

                                    <button typr="button" class="btn btn-outline-primary"
                                    @click="cart.qty++;changeCartQty(cart,cart.qty)"
                                    > + </button>

                                    <span
                                        class="input-group-text"
                                        id="basic-addon2">
                                        {{ cart.product.unit }}</span>
                                </div>
                                </div>
                            </td>
                            <td class="text-end">
                                <!-- <small class="text-success">折扣價：</small> -->
                                {{ cart.total }}
                            </td>
                            </tr>
                        </template>
                        <template v-else>
                            <tr>
                            <td class="h4 py-4" colspan="4">
                                購物車無商品
                            </td>
                            </tr>
                        </template>
                        </tbody>
                        <tfoot>
                        <tr>
                            <td colspan="3" class="text-end">總計</td>
                            <td class="text-end">{{ carts.final_total }}</td>
                            <!-- cart.product.title  -->
                        </tr>
                        <!-- <tr>
                            <td colspan="3" class="text-end text-success">折扣價</td>
                            <td class="text-end text-success">{{  }}</td>
                        </tr> -->
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
        <div class="my-5 row justify-content-center">
          <VeeForm
          ref="form"
          class="col-md-6"
          @submit="createOrder"
          v-slot="{ errors }"
          >
            <div class="mb-4 text-start">
              <label for="email" class="form-label">Email</label>
                <VeeField
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="form.user.email"></VeeField>
            <error-message name="email" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-4 text-start">
              <label for="name" class="form-label">收件人姓名</label>
              <VeeField
                id="name"
                name="姓名"
                type="text"
                class="form-control"
                :class="{ 'is-invalid': errors['姓名'] }"
                placeholder="請輸入姓名"
                rules="required"
                v-model="form.user.name"></VeeField>
              <error-message name="姓名" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-4 text-start">
              <label for="tel" class="form-label">收件人電話</label>
              <VeeField
                id="tel"
                name="電話"
                type="tel"
                class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話"
                :rules="isPhone"
                v-model="form.user.tel"
                ></VeeField>
              <error-message name="電話" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-4 text-start">
              <label for="address" class="form-label">收件人地址</label>

              <VeeField
              id="address"
              name="地址"
              type="text"
              class="form-control"
              :class="{ 'is-invalid': errors['地址'] }"
              placeholder="請輸入地址"
              rules="required"
              v-model="form.user.address"
              >
            </VeeField>
              <error-message name="地址" class="invalid-feedback"></error-message>
            </div>

            <div class="mb-4 text-start">
              <label for="message" class="form-label">留言</label>
              <textarea
                id="message"
                class="form-control"
                cols="30"
                rows="10"
                v-model="form.message"
                ></textarea>
            </div>
            <div class="text-end">
              <button class="btn btn-danger" type="submit">送出訂單</button>
            </div>
          </VeeForm>
        </div>
      </div>
</template>

<script>
const { VITE_URL } = import.meta.env;
const { VITE_NAME } = import.meta.env;

export default {
  data() {
    return {
      carts: {},
      isLoading: true,
      status: {
        showCartLoading: '',
      },
      // 表單
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      coupon_code: '',
    };
  },
  methods: {
    // /v2/api/{api_path}/cart
    getCart() {
      this.status.showCartLoading = this.carts.id;
      const url = `${VITE_URL}/api/${VITE_NAME}/cart`;
      this.$http
        .get(url)
        .then((res) => {
          this.carts = res.data.data;
          this.status.showCartLoading = '';
        })
        .catch((err) => {
          console.log(err);
        });
    },
    changeCartQty(item, qty = 1) {
    // 將整個購物車帶入
      const order = {
        product_id: item.product_id,
        qty,
      };
      this.status.cartQtyLoading = item.id;
      // 帶入購物車 id
      const url = `${VITE_URL}/api/${VITE_NAME}/cart/${item.id}`;
      this.$http
        .put(url, { data: order })
        .then((res) => {
          console.log(res);
          this.status.cartQtyLoading = '';
          //  加完購物車，會重跑顯示列表
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeCartItem(id) {
      this.status.cartQtyLoading = id;
      this.status.showCartLoading = id;
      console.log(id);
      const url = `${VITE_URL}/api/${VITE_NAME}/cart/${id}`;
      this.$http
        .delete(url)
        .then((res) => {
          alert(res.data.message);
          this.status.cartQtyLoading = '';
          this.status.showCartLoading = '';
          this.getCart();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeAllCart(item) {
      console.log(item);
      const url = `${VITE_URL}/api/${VITE_NAME}/cart`;
      this.$http
        .delete(url)
        .then(() => {
          this.getCart();
        })
        .catch((err) => {
          window.alert(err.data.message);
        });
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
    createOrder() {
    // console.log(this.form);
      const order = this.form;
      const url = `${VITE_URL}/api/${VITE_NAME}/order`;
      this.$http
        .post(url, { data: order })
        .then((res) => {
          alert(res.data.message);
          this.$refs.form.resetForm();
          this.getCart();
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
  },
  mounted() {
    // 初始化
    console.log();
    setTimeout(() => {
      this.getCart();
      this.isLoading = false;
    }, 1000);
  },
};
</script>
