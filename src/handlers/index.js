import User from "../user/user-model.js";
import { getHashFromClearText } from "../utils/crypto.js";

export default function addRouteHandlers(app) {
    app.get("/", async (request, reply) => {
        return { hello: "world" };
    });
    app.post("/api/users", async (request, reply) => {
        const { email, password, username } = request.body;
        app.log.info(`Creating user ${username}`);
        const user = new User({ 
            email, 
            password: getHashFromClearText(password), 
            username 
        });
        await user.save();
        return user.toJSON();
    });
}