import { createTodo, getTodos, updateTodo, deleteTodo } from "../handlers/todo-handlers.js";
import { authenticate } from "../middlewares/auth.js";

export default function todoRoutes(app) {
    app.post("/api/todos", { preHandler: [authenticate] }, createTodo);
    app.get("/api/todos", { preHandler: [authenticate] }, getTodos);
    app.put("/api/todos/:id", { preHandler: [authenticate] }, updateTodo);
    app.delete("/api/todos/:id", { preHandler: [authenticate] }, deleteTodo);
}