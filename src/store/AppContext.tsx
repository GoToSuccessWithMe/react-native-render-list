import React, {useState} from 'react';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

type Props = {
  children: React.ReactNode;
};

interface AppContextInterface {
  user: FirebaseAuthTypes.User | null;
  setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.User | null>>;
  initializing: boolean;
  setInitializing: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AppContext = React.createContext<AppContextInterface>({
  user: null,
  setUser: () => {},
  initializing: false,
  setInitializing: () => {},
});

export const AppContextProvider: React.FC<Props> = ({children}) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const contextValue = {
    initializing,
    setInitializing,
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
