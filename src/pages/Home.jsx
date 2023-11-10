import { header, skills, experiences} from "../assets/resume.json"
import { Header } from "../components/Header"
import { Skills } from "../components/Skills"
import { Exp } from "../components/Exp"

export function Home() {
	return (
		<div>
			<Header header={header}></Header>
			<Skills skills={skills}></Skills>
			<Exp experiences={experiences}></Exp>
		</div>
	);
}

