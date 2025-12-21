import { socket } from "@/app/_lib/connectSocket";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uuidv4 } from "zod";

interface MessageType {
  content: string;
  sender: string;
  chatRoomId: string;
}

export const useSendMutation = (roomId: string, userId: string) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (newMessageData: MessageType) => {
      return new Promise((resolve, reject) => {
        if (!socket) return reject(new Error("Socket not connected"));

        socket.on("recieve_message", (savedMessage) => {
          if (
            savedMessage.sender === newMessageData.sender &&
            savedMessage.content === newMessageData.content
          ) {
            resolve(savedMessage);
          }
        });

        socket.on("error", (errorMessage) => {
          reject(new Error(errorMessage));
        });

        socket.emit("send_message", newMessageData);
      });
    },

    onMutate: async (newMessageData: MessageType) => {
      await queryClient.cancelQueries({ queryKey: ["messages", roomId] });

      const previousMessages = queryClient.getQueryData(["messages", roomId]);

      queryClient.setQueryData(["messages", roomId], (old: MessageType[]) => {
        const optimisticMessage = {
          _id: uuidv4(),
          content: newMessageData.content,
          sender: { _id: userId },
          createdAt: new Date().toISOString(),
          isOptimistic: true,
        };

        return [...(old || []), optimisticMessage];
      });

      return { previousMessages };
    },
    onError: (err, newMesage, context) => {
      console.error("Failed to send message: ", err.message);

      queryClient.setQueryData(["messages", roomId], context?.previousMessages);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["messages", roomId] });
    },
  });

  return { sendMessageMutation: mutate };
};
