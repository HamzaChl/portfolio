import express, { Express } from "express";
import dotenv from "dotenv";
import path from "path";
import webRouter from "./routes/webrouter";

dotenv.config();

const app : Express = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("port", process.env.PORT ?? 3000);

app.use("/", webRouter());

app.use((req, res, next) => {
    res.status(404).render("404", { 
        message: "Oups, your lost?",
        title: "Oups your lost",
        currentPage: "error",
    });
});


app.listen(app.get("port"), () => {
    console.log("Server started on http://localhost:" + app.get("port"));
});