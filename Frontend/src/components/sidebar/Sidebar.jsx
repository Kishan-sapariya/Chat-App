import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-slate-500 p-4 flex flex-col h-full w-[60%] md:w-[40%] lg:w-[40%]'>
			<SearchInput />
			<div className='divider px-3'></div>
			<div className='flex-1 overflow-y-auto'>
				<Conversations />
			</div>
			<LogoutButton />
		</div>
	);
};

export default Sidebar;