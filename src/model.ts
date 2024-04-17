export type Node = {
  data: {
    id: string;
    type: NodeType;
    label: string;
    parent?: string;
    customData?: object;
  };
};

export type Edge = {
  data: {
    id: string;
    type: EdgeType;
    label?: string;
    source: string;
    target: string;
    healthy?: boolean;
    customData?: object;
  };
};

export enum NodeType {
  Cluster = "cluster",
  Interface = "interface",
  LCInterface = "loopConIfNT",
  Client = "client",
  Forwarder = "forwarder",
  Manager = "manager",
  Registry = "registry",
  Endpoint = "endpoint",
  Service = "service"
}

export enum EdgeType {
  InterfaceConnection = "interfaceConnection",
  InterfaceCrossConnection = "interfaceCrossConnection",
  InterfaceLoopedConnection = "interfaceLoopedConnection",
  ServiceRequest = "serviceRequest",
  RegistryRequest = "registryRequest"
}

export const AllowedNodeTypes = {
  Dataplane: [NodeType.Cluster, NodeType.Interface, NodeType.LCInterface, NodeType.Forwarder, NodeType.Client, NodeType.Endpoint],
  NetworkServices: [NodeType.Client, NodeType.Service],
  NetworkServiceRequests: [NodeType.Forwarder, NodeType.Client, NodeType.Endpoint, NodeType.Manager],
  RegistryRequests: [NodeType.Endpoint, NodeType.Forwarder, NodeType.Manager, NodeType.Registry],
}

export const AllowedEdgeTypes = {
  Dataplane: [EdgeType.InterfaceConnection, EdgeType.InterfaceCrossConnection, EdgeType.InterfaceLoopedConnection],
  NetworkServices: [EdgeType.ServiceRequest],
  NetworkServiceRequests: [EdgeType.ServiceRequest],
  RegistryRequests: [EdgeType.RegistryRequest],
}

export const InterfaceSize = "10"

export enum InterfaceShape {
  MEMIF = "ellipse",
  TAP = "round-rectangle",
  WIREGUARDG = "round-triangle",
  TUN = "round-diamond"
}

export enum EdgeLineType {
  Line = "none",
  Arrow = "triangle"
}

export enum Color {
  Black = "#000000",
  White = "#FFFFFF",
  Green = "#66CC00",
  Gray = "#CCCCCC",
  Red = "#FF0000",
  Orange = "#F59027"
}

export enum LineStyle {
  Solid = "solid",
  Dashed = "dashed",
  Dotted = "dotted"
}

export enum Page {
  Dataplane = "dataplane"
}

export enum Option {
  ShowLoopedConnections = "showLoopedConnections"
}

export type DisplayPanelOption = {
  page: Page,
  option: Option
}

export type DisplayPanelOptionEnv = {
  label: string,
  onClick: () => void,
  checked: boolean,
}
