import { useCallback, useEffect, useRef, useState } from "react";
import useCheckUserInfo from "./useCheckUserInfo";

type MessageHandler = (message: string) => void;

function useWebSocket(onMessage?: MessageHandler) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const { user } = useCheckUserInfo();

  // 메시지 핸들러 저장
  const messageHandler = useRef<MessageHandler | undefined>(onMessage);

  // 메시지 핸들러가 변경될 때 참조를 업데이트
  useEffect(() => {
    messageHandler.current = onMessage;
  }, [onMessage]);

  // WebSocket 연결
  // 서버주소: wss://pikacharger.store/ws/
  // room id에 chatlog-user.id
  useEffect(() => {
    const ws = new WebSocket(`${import.meta.env.VITE_APP_WEB_SOCKET_URL}`);

    ws.onopen = () => {
      console.log("웹소켓 서버에 연결됨");
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      console.log("받은 메시지:", event.data);
      messageHandler.current?.(event.data);
    };

    ws.onerror = (event) => {
      console.error("웹소켓 에러:", event);
    };

    ws.onclose = () => {
      console.log("웹소켓 연결이 닫혔습니다.");
      setIsConnected(false);
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, [user.id]);

  const sendMessage = useCallback(
    (message: string) => {
      // 웹소켓이 열려있다면 메시지 보내기
      // 연결할때 구분하기 or 메시지 보낼때마다 구분하기
      // url에 구분자를 보내거나, key값 메시지 인자로 보내기
      if (socket?.readyState === WebSocket.OPEN) {
        socket.send(message);
      }
    },
    [socket]
  );

  return { sendMessage, isConnected };
}

export default useWebSocket;
