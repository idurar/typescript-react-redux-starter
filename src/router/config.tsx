type routesProps = {
  path: string[] | string;
  exact: boolean;
  component: string;
}[];

const routes: routesProps = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: "/category/:id",
    exact: true,
    component: "Category",
  },
];

// const routes: routesProps[] = [
//   {
//     path: ["/", "/home"],
//     exact: true,
//     component: "Home",
//   },
// ];
// const routes: Array<routesProps> = [
//   {
//     path: ["/", "/home"],
//     exact: true,
//     component: "Home",
//   },
// ];

export default routes;
