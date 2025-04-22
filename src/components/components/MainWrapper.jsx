const MainWrapper = ({ children, id }) => {
	return (
		<div
			id={`section-${id}`}
			style={{
				// height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				borderWidth: 10,
				borderColor: "#00000073",
				borderTopWidth: 0,
				borderBottomWidth: 10,
				borderLeftWidth: 0,
				minHeight: "100vh",
			}}
		>
			{children}
		</div>
	);
};

export default MainWrapper;
