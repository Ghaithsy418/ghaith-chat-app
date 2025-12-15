import { getTokenClient } from "../_helpers/getTokenClient";
import { MessageTypes } from "../_types/messageTypes";
import { RoomTypes } from "../_types/roomTypes";
import { fetcher } from "./fetcher";

type RoomDataTypes = RoomTypes[];

export const getRooms = async () => {
  const token = getTokenClient();

  try {
    const data = await fetcher<RoomDataTypes>(
      "GET",
      "/get-rooms?limit=20&page=1",
      token,
    );

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getMessages = async (roomId: string) => {
  const token = getTokenClient();

  try {
    const data = await fetcher<MessageTypes[]>("POST", "/messages", token, {
      roomId,
    });

    return data;
  } catch (err) {
    console.error(err);
  }
};
