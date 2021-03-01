import { Helmet } from 'react-helmet';
const Home = () => {
	return (
		<>
			<Helmet>
				<title>Web articles</title>
				<meta
					name='description'
					content='Learn HTML, CSS, JavaScript, React, Vue, Flutter etc'
				/>
			</Helmet>
            <div>
                <h1>This is Home component</h1>
            </div>
		</>
	);
};
export default Home;
