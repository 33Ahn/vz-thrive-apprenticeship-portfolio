import React, { createContext, useState } from 'react';

const FavoritesContext = createContext();

function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(favorite) {
    // copy the current favorites array and add the new favorite to it
    setFavorites([...favorites, favorite]);
  }

  function removeFavorite(name) {
    // copy the current favorites array filtering out the pokemon with the given name
    setFavorites(favorites.filter((favorite) => name !== favorite));
  }

  return (
    <FavoritesContext.Provider>
      {children}
    </FavoritesContext.Provider>
  );
}

export { FavoritesProvider, FavoritesContext };