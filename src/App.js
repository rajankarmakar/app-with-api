import "./App.css";
import useGitapi from "./hooks/useGitapi";
import Card from "./components/Card";

function App() {
	const { apiData } = useGitapi();
	//console.log(userData);
	return (
		<>
			<div className="container md-auto px-4 mx-auto pb-10">
				<div class="grid grid-cols-1 gap-4">
					<h1 className="text-green-500 text-center text-5xl py-10">
						This is a simple GitHub fetching APP
					</h1>
				</div>
				<div className="grid md:grid-cols-3 md:gap-4 sm:grid-cols-12 sm:gap-4">
					{apiData &&
						apiData.map((item) => {
							return (
								<div
									key={item.id}
									className="border border-black"
								>
									<Card item={item} />
								</div>
							);
						})}
				</div>
			</div>
		</>
	);
}

export default App;
