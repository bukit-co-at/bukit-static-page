import AppleBadge from '../assets/app-store-badge.svg';
import CirclesDecoration from '../assets/decorations/circles.svg';
import GoogleBadge from '../assets/google-play-badge.png';
import LinesDecoration from '../assets/decorations/lines.svg';
import Waves from '../assets/waves.png';
import WavesDecoration from '../assets/decorations/waves.svg';

const FirstSection = () => {
	return (
		<div
			className="w-full bg-cover relative h-screen gap-x-5 grid grid-cols-12 py-20"
			style={{
				backgroundImage: 'url(../src/assets/phone_1.png)',
			}}
		>
			<img
				className="absolute bottom-0 left-0 z-10"
				src={CirclesDecoration}
				alt="circles-decoration"
			/>

			<img
				className="absolute top-0 right-0 z-[100]"
				src={WavesDecoration}
				alt="waves-decoration"
			/>

			<div className="col-start-2 col-span-4 text-heading-2 font-semibold text-black  w-full flex justify-center">
				<div className="flex flex-col text-end mt-[10vh] relative">
					<img
						className="absolute w-14 cp"
						src={LinesDecoration}
						alt="lines-decoration"
					/>
					<h2>Willkommen</h2>
					<h2>
						bei <span className="text-primary">Bukit</span>
					</h2>
					<div className="flex gap-5 justify-center items-center py-5">
						<a href="https://google.com">
							<img className="w-44 p-2" alt="apple-button" src={AppleBadge} />
						</a>
						<a href="https://google.com">
							<img className="w-44" src={GoogleBadge} alt="playstore-button" />
						</a>
					</div>
				</div>
			</div>
			<div className=" col-span-3 col-start-8 text-heading-5 text-grey-400  w-full flex items-end justify-center">
				<div className="cp flex flex-col mb-[10vh]">
					<h5>
						Online <span className="font-semibold">Buchen</span> ganz
					</h5>
					<h5>leicht gemacht</h5>
				</div>
			</div>
			<img src={Waves} className="absolute -bottom-20 left-0 right-0"></img>
		</div>
	);
};

export default FirstSection;
