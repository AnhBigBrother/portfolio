export const Background = () => {
	return (
		<div className='fixed left-0 top-0 -z-10 h-screen w-screen'>
			<div className='absolute left-0 top-0 z-10 h-screen w-screen bg-sky-100/30 dark:bg-neutral-950/70'></div>
			<div className="absolute h-screen w-screen translate-y-0 bg-[url('/day.png')] bg-cover bg-center dark:translate-y-full"></div>
			<div className="absolute h-screen w-screen -translate-y-full bg-[url('/night.png')] bg-cover bg-center dark:translate-y-0"></div>
		</div>
	);
};
