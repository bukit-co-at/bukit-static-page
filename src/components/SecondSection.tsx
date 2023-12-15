import Arrow from '../assets/decorations/arrow.png';
import Arrow2 from '../assets/decorations/arrow2.png';
import Phone2 from '../assets/phone_2.png';
import Waves from '../assets/waves2.png';
import WavesPhone from '../assets/waves3.png';

const SecondSection = () => {
	return (
		<div className="flex flex-col">
			<div className="gap-x-5 grid grid-cols-12 bg-white mt-20 relative">
				<div className="col-start-1 col-span-12 flex justify-center items-center h-fit py-10">
					<div className="text-heading-1 font-semibold text-black text-center">
						Finde deinen Shop <br /> ganz{' '}
						<span className="text-primary">leicht</span>
					</div>
				</div>
				<div className="col-start-2 col-span-2 flex items-center flex-col mt-28">
					<img src={Arrow} className="ml-20" width={140}></img>
					<h4 className="text-heading-5 font-semibold text-grey-400">
						Dein Standort
					</h4>
				</div>
				<div className="col-start-4 col-span-6 flex flex-col items-center">
					<img src={Phone2} width={500}></img>
					<img src={WavesPhone} width={497}></img>
				</div>
				<div className="col-span-2 flex flex-col justify-end mb-40">
					<img src={Arrow2} className="mr-20" width={140}></img>
					<h4 className="text-heading-5 font-semibold text-grey-400">
						Was suchst du?
					</h4>
				</div>
			</div>
			<img src={Waves}></img>
		</div>
	);
};

export default SecondSection;
