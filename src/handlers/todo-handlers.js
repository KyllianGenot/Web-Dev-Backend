import Todo from "../todo/todo-model.js";

export async function createTodo(request, reply) {
    const { title, description } = request.body;
    const userId = request.user.id;
    const todo = new Todo({
        title,
        description,
        user: userId,
    });
    await todo.save();
    return todo.toJSON();
}

export async function getTodos(request, reply) {
    const userId = request.user.id;
    const todos = await Todo.find({ user: userId });
    return todos;
}

export async function updateTodo(request, reply) {
    const { id } = request.params;
    const { title, description, completed } = request.body;
    const userId = request.user.id;
    const todo = await Todo.findOneAndUpdate(
        { _id: id, user: userId },
        { title, description, completed },
        { new: true }
    );
    if (!todo) {
        reply.code(404).send({ error: "Todo not found" });
        return;
    }
    return todo.toJSON();
}

export async function deleteTodo(request, reply) {
    const { id } = request.params;
    const userId = request.user.id;
    const todo = await Todo.findOneAndDelete({ _id: id, user: userId });
    if (!todo) {
        reply.code(404).send({ error: "Todo not found" });
        return;
    }
    return { message: "Todo deleted" };
}