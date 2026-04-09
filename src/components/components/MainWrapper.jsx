import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const MainWrapper = ({ children, id }) => {
	const [evenId, setEvenId] = useState(id % 2 === 0 ? id : -id);
	return (
		<div
			className="main-wrapper lg:mr-5 my-5 rounded-3xl overflow-hidden"
			id={`section-${id}`}
			onMouseEnter={() => setEvenId(0)}
			onMouseLeave={() => setEvenId(id % 2 === 0 ? id : -id)}
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				borderColor: "#00000073",
				borderTopWidth: 0,
				transform: `rotateZ(${evenId * 1}deg) scale(${evenId === 0 ? 1 : 0.93})`,
				transition: "0.3s ease-in-out",
			}}
		>
			{children}
		</div>
	);
};

export default MainWrapper;
