const MainWrapper = ({ children, id }) => {
	return (
		<div
			className="main-wrapper"
			id={`section-${id}`}
			style={{
				minHeight: "100vh",
				display: "flex",
				flex: 1,
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",

				// borderWidth: 10,
				borderColor: "#00000073",
				borderTopWidth: 0,
				borderBottomWidth: 10,
				// borderLeftWidth: 0,
				// minHeight: "100vh",
			}}
		>
			{children}
		</div>
	);
};

export default MainWrapper;
