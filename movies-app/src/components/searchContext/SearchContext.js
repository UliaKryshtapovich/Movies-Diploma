import React, { createContext, useContext, useState } from "react";

// передача данных между компанентами header и postslist без пропсов (можно-нужно было и через redux)
const SearchContext = createContext();//объект контекста, созданный с помощью функции createContext()

export const SearchProvider = ({ children }) => {//обертка для предоставления контекста
  const [searchResults, setSearchResults] = useState([]);//результат поиска и setSearchResults - ф-я для обновления {}

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
// пользовательский хук, который делает доступным контекст внутри других компонентов
// использует функцию useContext() для доступа к контексту SearchContext, затем возвращает объект,
// содержащий searchResults и setSearchResults.