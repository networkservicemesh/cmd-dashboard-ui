import {
    SET_NODES,
    SET_EDGES,
    SET_SELECTED_MENU_ITEM,
    SWITCH_DISPLAY_PANEL_OPTION
} from './types';
import { Node, Edge, Page, Option } from "../model";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState: { nodes: Node[]; edges: Edge[]; app: any } = {
    nodes: [],
    edges: [],
    app: {
        selectedMenuItem: 2,
        pages: {
            [Page.Dataplane]: {
                topDisplayPanelOptions: {
                    [Option.ShowLoopedConnections]: false
                }
            }
        }
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
            return { ...state, app: { ...state.app, selectedMenuItem: action.payload} };
        case SWITCH_DISPLAY_PANEL_OPTION:
            return {
                ...state,
                app: {
                    ...state.app,
                    pages: {
                        ...state.app.pages,
                        [action.payload.page]: {
                            ...state.app.pages[action.payload.page],
                            topDisplayPanelOptions: {
                                ...state.app.pages[action.payload.page].topDisplayPanelOptions,
                                [action.payload.option]: !state.app.pages[action.payload.page].topDisplayPanelOptions[action.payload.option]
                            }
                        }
                    }
                }
            };
        default:
            return state;
    }
};

export default rootReducer;
