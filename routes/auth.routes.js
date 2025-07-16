import { Router } from "express";

const authRouter = Router();

authRouter.post ('/sign-up', (req, res) => {
    // Logic for user sign-up
    res.send("User signed up successfully");
});

authRouter.post ('/sign-in', (req, res) => {
    // Logic for user sign-in
    res.send("User signed in successfully");
});

authRouter.post ('/sign-out', (req, res) => {
    // Logic for user sign-out
    res.send("User signed out successfully");
});

export default authRouter;