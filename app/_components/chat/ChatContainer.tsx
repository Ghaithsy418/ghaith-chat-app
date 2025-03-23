import OtherMessage from "./OtherMessage";
import SelfMessage from "./SelfMessage";

function ChatContainer() {
  return (
    <div className="scrollbar relative flex flex-1 flex-col-reverse gap-5 overflow-scroll px-3 py-4 text-sm leading-6">
      <SelfMessage>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis
        odio perferendis nihil ea quidem cum animi, tempora nam pariatur
        accusantium corporis voluptate saepe consequatur id ipsum. Similique
        omnis minus maiores.
      </SelfMessage>
      <OtherMessage>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore saepe
        quidem, fuga consequatur voluptatem dolores perspiciatis eligendi,
        ducimus dignissimos officiis magnam placeat animi magni nemo ipsum
        tempora, expedita sapiente doloremque.
      </OtherMessage>
      <OtherMessage image="./photoBG.jpg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        corporis nostrum dolorum, distinctio facere sapiente enim animi alias
        similique pariatur
      </OtherMessage>
      <SelfMessage>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
        architecto modi quisquam, perferendis voluptates labore cumque dolor
        reprehenderit voluptate, maxime alias reiciendis illum aperiam
        perspiciatis laborum non blanditiis repellendus. Expedita.
      </SelfMessage>
      <SelfMessage>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, libero
        at? Veritatis vel dignissimos
      </SelfMessage>
    </div>
  );
}

export default ChatContainer;
