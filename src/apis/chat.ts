import { api } from "./@config";

const myChatApi = {
  async postChatRoom(data: FormData) {
    return api.post("/chatroom", data).then((response) => response.data);
  },
  async getChatRoomList() {
    return api.get("/chatroom/rooms").then((response) => response.data);
  },
};

export default myChatApi;
