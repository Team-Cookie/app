export const FAVORITE_ADD = 'FAVORITES_ADD';
export const FAVORITE_REMOVE = 'FAVORITES_REMOVE';

export const getFavorites = state => state.favorites;

export function favorites(state = [], { type, payload }) {
  switch(type) {
    case FAVORITE_ADD:
      return payload;
    case FAVORITE_REMOVE:
      return state.filter(favorite => favorite.id === payload.id ? payload : favorite);
    default:
      return state;
  }
}