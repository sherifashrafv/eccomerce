import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import routerSignUp from "../components/SignUp/routerSign.vue";
import Sign from "../components/SignUp/SignUp.vue";
import Login from "../components/Login/Login.vue";
import Settings from "../components/Settings/Setting.vue";
import Edit from "../components/Edit/Edit.vue";
import Search from "../components/Search/ser.vue";
import ProductId from "../components/Products/Products.vue";
import ShoppingCart from "../components/shoppingCart/Shopping.vue";
import Error from "../views/Error.vue";
import i18n from "../i18n";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: `/${i18n.locale}`,
  },

  {
    path: "/:lang",
    component: {
      render(c) {
        return c("router-view");
      },
    },
    children: [
      {
        path: "",
        name: "Home",
        component: HomeView,
      },
      {
        path: "Search",
        name: "Search",
        component: Search,
      },

      {
        path: "SignUp",
        name: "SignUp",
        component: routerSignUp,
        children: [
          {
            name: "default",
            path: "",
            component: Sign,
            meta: {
              layout: "custome-layout",
            },
          },
          {
            name: "login",
            path: `login`,
            component: Login,
            meta: {
              layout: "custome-layout",
            },
          },
        ],
      },
      {
        name: "Settings",
        component: Settings,
        path: "Settings",
        meta: {
          layout: "custome-layout",
        },
        children: [
          {
            name: "default",
            path: "",
            component: Edit,
            meta: {
              layout: "custome-layout",
            },
          },
          {
            name: "login",
            path: `login`,
            component: Login,
            meta: {
              layout: "custome-layout",
            },
          },
        ],
      },

      {
        path: `/${i18n.locale}/product/:id`,
        name: "ProductId",
        component: ProductId,
      },
      {
        path: `ShoppingCart`,
        name: "ShoppingCart",
        component: ShoppingCart,
      },
      {
        name: "Error",
        path: "/:pathMatch(.*)*",
        component: Error,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
