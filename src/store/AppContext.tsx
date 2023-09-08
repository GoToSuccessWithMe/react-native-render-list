import React, {useState} from 'react';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {IPost} from '../types/Post';
import {ITodo} from '../types/Todo';

type Props = {
  children: React.ReactNode;
};

type AvailableList = 'posts' | 'todos';

interface ItemLists {
  posts: IPost[];
  todos: ITodo[];
}

interface AppContextInterface {
  user: FirebaseAuthTypes.User | null;
  setUser: React.Dispatch<React.SetStateAction<FirebaseAuthTypes.User | null>>;
  selectedList: AvailableList;
  setSelectedList: React.Dispatch<React.SetStateAction<AvailableList>>;
  availableLists: AvailableList[];
  itemsLists: ItemLists;
  setItemsLists: React.Dispatch<React.SetStateAction<ItemLists>>;
}

export const AppContext = React.createContext<AppContextInterface>({
  user: null,
  setUser: () => {},
  availableLists: ['posts', 'todos'],
  selectedList: 'posts',
  setSelectedList: () => {},
  itemsLists: {
    posts: [],
    todos: [],
  },
  setItemsLists: () => {},
});

export const AppContextProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const availableLists: AvailableList[] = ['posts', 'todos'];
  const [selectedList, setSelectedList] = useState<AvailableList>('posts');
  const [itemsLists, setItemsLists] = useState<ItemLists>({
    posts: [],
    todos: [],
  });

  const contextValue = {
    user,
    setUser,
    availableLists,
    selectedList,
    setSelectedList,
    itemsLists,
    setItemsLists,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
