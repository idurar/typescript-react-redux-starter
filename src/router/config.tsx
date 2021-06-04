type routesProps = {
  path: string[];
  exact: boolean;
  component: string;
}[];

const routes: routesProps = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
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
