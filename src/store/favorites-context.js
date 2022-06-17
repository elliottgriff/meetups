import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavs: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavs, setUserFavs] = useState([]);

  function addFavHandler(favoriteMeetup) {
    setUserFavs((prevUserFavs) => {
      return prevUserFavs.concat(favoriteMeetup);
    });
  }

  function removeFavHandler(meetupId) {
    setUserFavs((prevUserFavs) => {
      return prevUserFavs.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavHandler(meetupId) {
    return userFavs.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavs,
    totalFavs: userFavs.length,
    addFavorite: addFavHandler,
    removeFavorite: removeFavHandler,
    itemIsFavorite: itemIsFavHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
