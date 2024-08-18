export const Background = () => {
	return (
		<div className='fixed top-0 left-0 w-screen h-screen -z-10'>
			<div className='absolute top-0 left-0 w-screen h-screen bg-sky-100/80 dark:bg-slate-950/80 z-10'></div>
			<div className="absolute translate-y-0 dark:translate-y-full bg-[url('/day.jpg')] w-screen h-screen bg-cover bg-center"></div>
			<div className="absolute -translate-y-full dark:translate-y-0 bg-[url('/night.jpg')] w-screen h-screen bg-cover bg-center"></div>
		</div>
	);
};
