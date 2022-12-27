import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";


export interface IMessage {
  id: number;
  message: string;
  userName: string;
  sendId: number;
  receivedId: number;
}

export interface IUser {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  age: number;
  id: number;
  phone: number;
  url_image: string;
  type: string;
  spec_or_cond: string;
  state: string;
  city: string;
  cpf: string;
}

interface AuthProviderData {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
  filteredUsers: IUser[];
  setFilteredUsers: Dispatch<SetStateAction<IUser[]>>;
  users: IUser[];
  setUsers: Dispatch<SetStateAction<IUser[]>>;
  handleSearch: (inputValue: string) => void;
  getUser: () => void;

}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext({} as AuthProviderData);

export const UserProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [users, setUsers] = useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<IUser[]>(users);

  const navigate = useNavigate();

  const getUsers = async () => {
    const token = localStorage.getItem("authToken");
    try {
      if (token) {
        const users = await api
          .get("users/", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          })
        setUsers(users.data)
      }

    } catch (error) {

      console.log(error)
    }
  }

  const getUser = async () => {
    const token = localStorage.getItem("authToken");
    try {
      if (token) {
        const user = await api
          .get("users/1/", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${JSON.parse(token)}`,
            },
          })
        setUser(user.data)
      }

    } catch (error) {
      console.log(error)
      navigate("/login")
    }
  }


  useEffect(() => {
    getUsers()
    getUser()
  }, [user]);


  useEffect(() => {
    const newUsers = users.filter((userData) => {
      return userData.type !== user.type;
    });

    setFilteredUsers(newUsers);


  }, [user, users]);

  function handleSearch(inputValue: string) {
    setFilteredUsers(
      users.filter((userFilter) => {
        return userFilter.type !== user.type
          ? userFilter.spec_or_cond?.toLowerCase().includes(inputValue) ||
          userFilter.city.toLocaleLowerCase().includes(inputValue)
          : false;
      })
    );
  }

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
        getUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
