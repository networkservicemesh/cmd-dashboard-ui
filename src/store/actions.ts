import { SET_NODES, SET_EDGES, SET_SELECTED_MENU_ITEM } from './types';
import { Node, Edge } from "../model";

export const setNodes = (nodes: Node[]) => ({
    type: SET_NODES,
    payload: nodes,
});

export const setEdges = (edges: Edge[]) => ({
    type: SET_EDGES,
    payload: edges,
});

export const setSelectedMenuItem = (selectedMenuItem: number) => ({
    type: SET_SELECTED_MENU_ITEM,
    payload: selectedMenuItem,
});
