import ChatContainer from "./ChatContainer";
import ChatHead from "./ChatHead";
import ChatSender from "./ChatSender";

function Chat({ id }: { id: string }) {
  return (
    <div className="flex h-full flex-2 flex-col border-r-1 border-l-1 border-gray-300/30">
      {!id && (
        <div className="my-auto flex flex-col items-center justify-center gap-4 bg-linear-to-br from-indigo-50/80 via-indigo-100/80 to-indigo-200/80 bg-clip-text text-3xl font-bold tracking-wide text-transparent">
          <h2>
            Start Chatting By adding someone first{" "}
            <span className="bg-transparent text-indigo-50">🫶</span>
          </h2>
          <p>
            Enjoy This nice app
            <span className="bg-transparent text-indigo-50">😊</span>
          </p>
        </div>
      )}
      {id && (
        <>
          <ChatHead />
          <ChatContainer />
          <ChatSender />
        </>
      )}
    </div>
  );
}

export default Chat;
