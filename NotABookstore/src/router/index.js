import { createRouter, createWebHistory } from "vue-router";
import routes from "@/router/routes";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

// router guard for /reviews
router.beforeEach((to, from, next) => {
  const authenticatedUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (requiresAuth && !authenticatedUser) next("login");
  else next();
});

export default router;
