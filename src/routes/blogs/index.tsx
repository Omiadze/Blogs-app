import { AUTH_ROUTES } from "./auth";
import { MAIN_ROUTES } from "./main";

export const BLOGS_ROUTES = [...AUTH_ROUTES, ...MAIN_ROUTES];
