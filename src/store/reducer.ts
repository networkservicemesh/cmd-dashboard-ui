import { SET_NODES, SET_EDGES, SET_SELECTED_MENU_ITEM } from './types';
import { Node, Edge } from "../model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState: { nodes: Node[]; edges: Edge[]; app: any } = {
    nodes: [],
    edges: [],
    app: {
        selectedMenuItem: 2,
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_NODES:
            return { ...state, nodes: action.payload };
        case SET_EDGES:
            return { ...state, edges: action.payload };
        case SET_SELECTED_MENU_ITEM:
            return { ...state, app: { selectedMenuItem: action.payload} };
        default:
            return state;
    }
};

export default rootReducer;
