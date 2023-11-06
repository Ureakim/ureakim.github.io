import { header, skills, experiences} from "../assets/resume.json"
import { Header } from "../components/Header"

export function Home() {
	return (
		<div>
			<Header header={header}></Header>
		</div>
	);
}

