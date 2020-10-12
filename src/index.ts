import "./style/app.scss";
import "./layouts/main";
import * as resume from "./config/resume.json"

if (module.hot) {
	module.hot.accept();
}

document.title = `${resume.header.name} - ${resume.header.work}`