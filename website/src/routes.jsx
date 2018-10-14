import LoginPage from "./pages/LoginPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import LandingPage from "./pages/LandingPage";

var indexRoutes = [
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/favorites-page", name: "FavoritesPage", component: FavoritesPage },
  { path: "/portfolio-page", name: "PortfolioPage", component: PortfolioPage },
  { path: "/", name: "LandingPage", component: LandingPage }
];

export default indexRoutes;
