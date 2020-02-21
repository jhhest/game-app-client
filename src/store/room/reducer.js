const ALL_ROOMS = "room/ALL_ROOMS";
const ONE_ROOM = "room/ONE_ROOM";
const JOIN_ROOM = "JOIN_ROOM";

const initialState = {
  room: {},
  rooms: []
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case ALL_ROOMS: {
      return { ...state, rooms: [...action.payload] };
    }

    case ONE_ROOM: {
      return {
        rooms: [...state.rooms, action.payload]
      };
      //const Newstate = {...state, [action.payload]}
      //console.log("ONE_ROOM STATE: ", Newstate)
      //return { ...state, rooms: { ...state, {...action.payload } } };
    }

    case JOIN_ROOM: {
      return state.map(room => {
        return room.id === action.payload.id ? action.payload : room;
      });
    }

    default:
      return state;
  }
}
