import {
  FunctionComponent,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { enqueueSnackbar } from "notistack";

interface IUserContext {
  user: IUser | undefined;
  setUser: Dispatch<SetStateAction<IUserContext["user"]>>;
  login: (email: string) => void;
  isUserLoading: boolean;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

interface Props {}

export const Provider: FunctionComponent<Props> = ({ children }) => {
  // const apiBaseUrl = "https://thawing-sierra-15233.herokuapp.com/api/v1";
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
  const [user, setUser] = useState<IUser | undefined>();
  const [isUserLoading, setIsUserLoading] = useState(false);

  const login = async (email: string) => {
    setIsUserLoading(true);
    const url = `${apiBaseUrl}/users`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }).then((res) => {
        return res.json();
      });
      setUser({ email: response.email, id: response.id });
      setIsUserLoading(false);
    } catch (error) {
      enqueueSnackbar({ variant: "error", message: error.message });
      setIsUserLoading(false);
      throw new Error(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, login, isUserLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export interface IUser {
  email: string;
  id: number;
}

export type IUserInput = {
  email: string;
};
