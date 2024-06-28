import express from "express";


const pages = ["home", "projects", "easter", "contact"];


export default function webRouter() {
    const router = express.Router();

    router.get("/", (req, res) => {
        res.render("index", {
            title: "Hamza's portfolio!",
            currentPage: "home"
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
            currentPage: "projects"
        })
    });
    router.get("/contact", (req, res) => {
        res.render("contact", {
            title: "Contact me",
            currentPage: "contact"
        })
    });

    return router;
}