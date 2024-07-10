import express from "express";
import path from "path";
import fs from "fs";
import { Project } from "../types";


const pages = ["home", "projects", "easter", "contact"];


export default function webRouter() {
    const router = express.Router();

    const projectsDataPath = path.join(__dirname, "../projectsfr.json");
    const projectsData = JSON.parse(fs.readFileSync(projectsDataPath, "utf-8")).projects as Project[];


    router.get("/", (req, res) => {
        res.render("index", {
            title: "Hamza's portfolio!",
            currentPage: "home",
            projects: projectsData,
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
            currentPage: "projects",
            projects: projectsData,
        })
    });
    router.get("/contact", (req, res) => {
        res.render("contact", {
            title: "Contact me",
            currentPage: "contact"
        })
    });
    router.get("/project", (req, res) => {
        res.render("project", {
            title: "Contact me",
            currentPage: "project",
            projectName: "project",
            projects: projectsData,
        })
    });
    

    projectsData.forEach(project => {
        router.get(`/project${project.href}`, (req, res) => {
            res.render("project", {
                title: project.name,
                currentPage: project.href,
                projects: projectsData,
    
            });
        });
    });


    return router;
}