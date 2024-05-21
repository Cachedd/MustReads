import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/books",
    name: "books",
    // route level code-splitting
    // this generates a separate chunk (Books.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/BooksView.vue"),
  },
  {
    path: "/reviews",
    name: "reviews",
    component: () => import("../views/ReviewsView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/SignupView.vue"),
  },
];

export default routes;
