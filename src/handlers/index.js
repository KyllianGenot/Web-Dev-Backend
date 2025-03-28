import userRoutes from "../routes/user-routes.js";
import todoRoutes from "../routes/todo-routes.js";

export default function addRouteHandlers(app) {
    userRoutes(app);
    todoRoutes(app);
}