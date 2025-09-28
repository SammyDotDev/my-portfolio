// eslint-disable-next-line react/prop-types
const TitleContainer = ({ children }) => {
	return (
		<section className="nav-indicator">
			<p className="nav-indicator-text rounded-lg">{children}</p>
		</section>
	);
};

export default TitleContainer;
