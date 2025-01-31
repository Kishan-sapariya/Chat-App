import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
const Message = ({ message }) => {
	const { authUser  } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser ._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser .profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-orange-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName} mb-2`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='User  Avatar' src={profilePic} className="object-cover" />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2 text-sm md:text-base`}>{message.message}</div>
			<div className='chat-footer text-black text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};

export default Message;