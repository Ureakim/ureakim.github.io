export function Header({header}) {
	console.log(header)
	return (
		<div class="relative after:content-[''] flex flex-col items-center p-40
			after:bg-[url('/src/assets/keyboard.png')] after:bg-cover after:bg-center after:bg-no-repeat after:top-0 after:left-0 after:bottom-0 after:right-0 after:opacity-25 after:absolute after:-z-10">
			<h1 class="text-5xl font-bold">{header.name}</h1>
			<h2 class="text-2xl">{header.work}</h2>
		</div>
	);
}
