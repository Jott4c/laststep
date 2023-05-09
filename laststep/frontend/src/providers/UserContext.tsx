import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { io, Socket } from "socket.io-client";

export interface IMessage {
  createDate: string;
  roomId: string;
  text: string;
  user: string;
  __v: number;
  _id: string;
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  zip_code: string;
  coutry: string;
}
export interface IUser {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  id: string;
  phone: number;
  url_image: string;
  user_type: string;
  skills: string;
  diseases: string;
  cpf: string;
  address: IAddress;
}

export interface IChatUser {
  codeUnique: string;
  name: string;
  __v: number;
  _id: string;
}

export interface IRoom {
  __v: number;
  _id: string;
  userB: string;
  userA: string;
  messages: IMessage[];
}

interface AuthProviderData {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  filteredUsers: IUser[];
  setFilteredUsers: Dispatch<SetStateAction<IUser[]>>;
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
  handleSearch: (inputValue: string) => void;
  socket: Socket;
  room: IRoom;
  setRoom: Dispatch<SetStateAction<IRoom>>;
  rooms: IRoom[];
  messages: IMessage[];
  setMessages: Dispatch<SetStateAction<IMessage[]>>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as AuthProviderData);

export const UserProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(users);
  const [room, setRoom] = useState({} as IRoom);
  const [rooms, setRooms] = useState([] as IRoom[]);
  const [messages, setMessages] = useState([] as IMessage[]);

  const token = localStorage.getItem("authToken");

  const navigate = useNavigate();

  const getUsers = async () => {
    try {
      if (token) {
        const users = await api.get("users/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });
        setUsers(users.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      if (token) {
        const user = await api.get("users/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });
        setUser(user.data[0]);
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  };

  useEffect(() => {
    getUsers();
    getUser();
  }, [token]);

  useEffect(() => {
    socket.emit("rooms", user.email);
  }, [user, messages]);

  useEffect(() => {
    const newUsers = users.filter((userData) => {
      return userData.user_type !== user.user_type;
    });

    setFilteredUsers(newUsers);
  }, [user, users]);

  function handleSearch(inputValue: string) {
    setFilteredUsers(
      users.filter((userFilter) => {
        return userFilter.user_type !== user.user_type
          ? userFilter.skills?.toLowerCase().includes(inputValue) ||
              userFilter.diseases?.toLowerCase().includes(inputValue) ||
              userFilter.address?.city.toLocaleLowerCase().includes(inputValue)
          : false;
      })
    );
  }

  const socket = io("https://chat-laststep.onrender.com");

  useEffect(() => {
    socket.on("connect", () => console.log("conectado"));
  }, []);

  socket.on("room", (data) => {
    setRoom(data);
    setMessages(data.messages);
  });

  socket.on("rooms", (rooms) => {
    const filterRooms = rooms.filter((room: IRoom) => {
      return room.messages.length > 0;
    });

    setRooms(filterRooms);
  });

  socket.on("message", (msg) => {
    setMessages(msg);
  });

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        users,
        setUsers,
        filteredUsers,
        setFilteredUsers,
        handleSearch,
        socket,
        room,
        setRoom,
        rooms,
        messages,
        setMessages,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
