import React from "react";

export default function Card({ item }) {
	return (
		<>
			<div className="bg-white rounded-lg">
				<div className="w-96 border-t-8 border-pink-600 rounded-lg flex">
					<div className="w-1/3 pt-6 flex justify-center p-4">
						<img
							className="rounded-full"
							src={item.owner.avatar_url}
							alt={item.full_name}
						/>
					</div>
					<div className="w-full pt-9 pr-4">
						<h3 className="font-bold text-pink-700">{item.name}</h3>
						<p className="py-4 text-sm text-gray-400">
							{item.description || "NO Description"}
						</p>
					</div>
				</div>
				<div className="p-4 flex space-x-4">
					<a
						href={item.html_url}
						className="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm"
						target="_blank"
					>
						Goto repo
					</a>
					<a
						href={item.homepage || ""}
						target="_blank"
						className="w-1/2 px-4 py-3 text-center text-pink-100 bg-pink-600 rounded-lg hover:bg-pink-700 hover:text-white font-bold text-sm"
					>
						View Demo
					</a>
				</div>
			</div>
		</>
	);
}
