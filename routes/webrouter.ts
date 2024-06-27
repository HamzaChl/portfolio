import express from "express";



export default function webRouter() {
    const router = express.Router();

    router.get("/", (req, res) => {
        res.render("index", {
            title: "Hello World",
            message: "Hello World"
        })
    });
    router.get("/easter", (req, res) => {
        res.render("easter", {
            title: "Hello World",
        })
    });
    router.get("/projects", (req, res) => {
        res.render("projects", {
            title: "My projects",
        })
    });

    return router;
}