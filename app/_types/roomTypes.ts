export interface RoomTypes {
  _id: string;
  otherUser: {
    _id: string;
    image: string | null;
    fullName: string;
  };
}
