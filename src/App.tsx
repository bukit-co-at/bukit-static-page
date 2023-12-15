import FifthSection from './components/FifthSection';
import FirstSection from './components/FirstSection';
import FourthSection from './components/FourthSection';
import Navbar from './components/Navbar';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';

function App() {
	return (
		<div className="flex flex-col">
			<Navbar></Navbar>
			<FirstSection></FirstSection>
			<SecondSection></SecondSection>
			<ThirdSection></ThirdSection>
			<FourthSection></FourthSection>
			<FifthSection></FifthSection>
		</div>
	);
}

export default App;
