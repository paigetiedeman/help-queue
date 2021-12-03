import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
  case 'ADD_TICKET':
    return Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  case c.DELETE_TICKET:
    let newState = { ...state };
    delete newState[id];
    return newState;
  // case c.UPDATE_TIME:
  //   const newTicket = Object.assign({}, state[id], {formattedWaitTime});
  //   const updatedState = Object.assign({}, state, {
  //     [id]: newTicket
  //   });
  //   return updatedState;
  default:
    return state;
    }
};