import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Icons from "@/pages/Icons.vue";
import Notifications from "@/pages/Mapa.vue";
import Typography from "@/pages/Typography.vue";
import TableList from "@/pages/Guias.vue";
import ListaVisitantes from "@/pages/TableListv.vue";
import ListaReservas from "@/pages/TableListr.vue";
import Detalhes from "@/pages/Detalhes.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard,
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile,
      },
      
      {
        path: "icons",
        name: "icons",
        component: Icons,
      },
      {
        path: "mapa",
        name: "mapa",
        component: Notifications,
      },
      {
        path: "typography",
        name: "typography",
        component: Typography,
      },
      {
        path: "table-list",
        name: "table-list",
        component: TableList,
      },
      {
        path: "table-listv",
        name: "table-listv",
        component: ListaVisitantes,
      },
      {
        path: "table-listr",
        name: "table-listr",
        component: ListaReservas,
      },
      {
        path: "detalhes/:emailvis",
        name: "detalhes",
        component: Detalhes,
      },
    ],
  },
  { path: "*", component: NotFound },
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
