import{_ as u,j as n,r as c,o as d,c as _,a as r,b as o,w as a,d as e,F as l}from"./index-ymGICESR.js";var h={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_NAME:"maciw2",BASE_URL:"/vite-work6/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m}=h,p={methods:{checkAdmin(){n.post(`${m}/api/user/check`).then(()=>{}).catch(()=>{alert("還沒登入請先登入"),this.$router.push("/login")})}},mounted(){const s=document.cookie.replace(/(?:(?:^|.*;\s*)hexVueToken\s*=\s*([^;]*).*$)|^.*$/,"$1");n.defaults.headers.common.Authorization=s,this.checkAdmin()}},f=r("h2",null,"這是後台",-1);function k(s,V,R,$,x,E){const t=c("RouterLink"),i=c("RouterView");return d(),_(l,null,[f,r("nav",null,[o(t,{to:"/admin/products"},{default:a(()=>[e("產品列表")]),_:1}),e(" | "),o(t,{to:"/admin/order"},{default:a(()=>[e("訂單列表")]),_:1}),e(" | "),o(t,{to:"/"},{default:a(()=>[e("回到前台")]),_:1})]),o(i)],64)}const w=u(p,[["render",k]]);export{w as default};
