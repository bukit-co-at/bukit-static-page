const Navbar = () => {
	return (
		<div className="fixed bg-[#f5f5f5] p-6 flex flex-row gap-x-4  top-0 left-0 z-50 right-0">
			<div className="w-[1px] bg-black"></div>
			<a
				className="text-body text-primary font-normal"
				href="https://app.bukit.co.at"
			>
				Kunde werden
			</a>
		</div>
	);
};

export default Navbar;
