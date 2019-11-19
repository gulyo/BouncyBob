import "./app.imports";
import STYLE from "./index.module.scss";
import "./index.scss";
import { logBouncyBob } from "./util/logConfig";

logBouncyBob.info({ msg: "Hello World" });
$("[property='test']").addClass(STYLE.test);
