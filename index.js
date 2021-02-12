"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const posts_js_1 = __importDefault(require("./routes/posts.js"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = express_1.default();
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
app.use(cors_1.default());
app.use(body_parser_1.default.json({ limit: "30mb" }));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use("/posts", posts_js_1.default);

app.get("/", (req, res) => {
  res.send("Hellow World");
});
app.listen(PORT, () => {
  console.log("server is listening at " + app.get("port"));
});
