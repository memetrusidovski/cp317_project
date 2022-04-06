const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/test", "/test"],
    exact: true,
    component: "Login",
  },
  {
    path: ["/signup"],
    exact: true,
    component: "Signup",
  },
  {
    path: ["/login"],
    exact: true,
    component: "Login",
  },
  {
    path: ["/places"],
    exact: true,
    component: "Places",
  },
];

export default routes;
