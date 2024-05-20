import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/firebase.js";
import routes from "@/router/routes";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

// To check if the user is authenticated
const isAuthenticated = () => {
  return auth.currentUser !== null;
};

// Router guard for routes that require authentication
router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  // if the current route requires auth
  if (requiresAuth) {
    // Delay the guard until Firebase has initialized and detected the authentication state
    await new Promise((resolve) => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        // Unsubscribe to prevent memory leaks
        unsubscribe();
        resolve(user);
      });
    });

    // Check if the user is authenticated
    if (!isAuthenticated()) {
      next("login");
    } else {
      next();
    }
  } else {
    // If the route does not require authentication, proceed
    next();
  }
});

export default router;
