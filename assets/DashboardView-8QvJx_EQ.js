import{_ as d,j as s,r as c,o as u,c as _,a as r,b as o,w as a,d as e,F as l}from"./index-9zM9hFcF.js";var h={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"maciw2",BASE_URL:"/undefined/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m}=h,p={methods:{checkAdmin(){s.post(`${m}/api/user/check`).then(()=>{}).catch(()=>{alert("還沒登入請先登入"),this.$router.push("/login")})}},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/,"$1");s.defaults.headers.common.Authorization=n,this.checkAdmin()}},f=r("h2",null,"這是後台",-1);function V(n,k,R,$,x,E){const t=c("RouterLink"),i=c("RouterView");return u(),_(l,null,[f,r("nav",null,[o(t,{to:"/admin/products"},{default:a(()=>[e("產品列表")]),_:1}),e(" | "),o(t,{to:"/admin/order"},{default:a(()=>[e("訂單列表")]),_:1}),e(" | "),o(t,{to:"/"},{default:a(()=>[e("回到前台")]),_:1})]),o(i)],64)}const w=d(p,[["render",V]]);export{w as default};
