import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { switchDisplayPanelOption } from '../store/actions';
import { AppDispatch, RootState } from '../store/store';
import { Stylesheet } from "cytoscape";
import cloneDeep from 'lodash/cloneDeep';
import CytoscapeCanvas from "./CytoscapeCanvas";
import TopDisplayPanel from "../floatPanels/TopDisplayPanel";
import {
  NodeType,
  InterfaceSize,
  InterfaceShape,
  EdgeLineType,
  EdgeType,
  Color,
  LineStyle,
  AllowedNodeTypes,
  AllowedEdgeTypes,
  Node,
  Edge,
  Page,
  Option,
  DisplayPanelOptionEnv
} from "../model";

interface DataplaneProps {
  nodes: Node[];
  edges: Edge[];
}

function getDataplaneStylesheet() {
  return [
    {
      selector: "node",
      style: {
        label: "data(label)",
        "text-valign": "bottom",
        "text-margin-y": 2,
        "font-size": "10px",
        "font-family": "Roboto",
        "background-color": Color.White,
        "border-color": Color.Gray,
        "border-width": 1,
        shape: "round-rectangle"
      }
    },
    {
      selector: `node[type = '${NodeType.Interface}']`,
      style: {
        width: InterfaceSize,
        height: InterfaceSize,
        "font-size": "8px",
        'text-background-color': Color.Gray,
        'text-background-opacity': 1,
        "text-background-shape": "roundrectangle",
        'text-border-color': Color.Gray,
        "text-border-width": "0.2em",
        "text-border-opacity": 1
      }
    },
    {
      selector: `node[type = '${NodeType.LCInterface}']`,
      style: {
        width: InterfaceSize,
        height: InterfaceSize,
        "font-size": "8px",
        'text-background-color': Color.Gray,
        'text-background-opacity': 1,
        "text-background-shape": "roundrectangle",
        'text-border-color': Color.Gray,
        "text-border-width": "0.2em",
        "text-border-opacity": 1
      }
    },
    {
      selector: `node[type = '${NodeType.Interface}'][label]`,
      style: {
        shape: (node: { data: (arg0: string) => string | string[] }) =>
          node.data("label").includes("memif") ? InterfaceShape.MEMIF :
          node.data("label").includes("wg") ? InterfaceShape.WIREGUARDG :
          node.data("label").includes("tun") ? InterfaceShape.TUN :
          InterfaceShape.TAP
      }
    },
    {
      selector: `node[type = '${NodeType.Cluster}']`,
      style: {
        "border-color": Color.Black,
        "border-style": LineStyle.Dashed,
        "text-valign": "top",
        "text-halign": "left",
        "text-margin-x": 65,
        "text-margin-y": 15
      }
    },
    {
      selector: "edge",
      style: {
        width: 1,
        "line-style": LineStyle.Solid,
        "line-color": Color.Green,
        "curve-style": "bezier",
        "target-arrow-shape": EdgeLineType.Line,
        "target-arrow-color": Color.Green
      }
    },
    {
      selector: `edge[type = '${EdgeType.InterfaceCrossConnection}']`,
      style: {
        "line-style": LineStyle.Dashed
      }
    },
    {
      selector: "edge[healthy]",
      style: {
        "line-color": (edge: { data: (arg0: string) => boolean }) =>
          edge.data("healthy") === false ? Color.Red : Color.Green
      }
    },
    {
      selector: `edge[type = '${EdgeType.InterfaceLoopedConnection}']`,
      style: {
        "line-color": Color.Gray
      }
    }
  ];
}

export default function Dataplane({ nodes, edges }: DataplaneProps) {
  const dispatch = useDispatch<AppDispatch>();
  const showLoopedConnections = useSelector((state: RootState) => state.app.pages.dataplane.topDisplayPanelOptions.showLoopedConnections);

  const displayPanelOptions: DisplayPanelOptionEnv[] = [
    {
      label: 'Looped Connections',
      onClick: () => dispatch(switchDisplayPanelOption({
        page: Page.Dataplane,
        option: Option.ShowLoopedConnections
      })),
      checked: showLoopedConnections,
    },
  ];

  const [stylesheet] = React.useState<Stylesheet[]>(getDataplaneStylesheet() as Stylesheet[]);
  const dataplaneNodes = nodes
      .filter(n => AllowedNodeTypes.Dataplane.includes(n.data.type))
      .filter(n => showLoopedConnections ? n : n.data.type !== NodeType.LCInterface)
      .map(n => ({ ...n, data: cloneDeep(n.data) }));
  const dataplaneEdges = edges
      .filter(e => AllowedEdgeTypes.Dataplane.includes(e.data.type))
      .filter(e => showLoopedConnections ? e : e.data.type !== EdgeType.InterfaceLoopedConnection)
      .map(e => ({ ...e, data: cloneDeep(e.data) }));

  return (
    <>
      <CytoscapeCanvas
        nodes={dataplaneNodes}
        edges={dataplaneEdges}
        stylesheet={stylesheet}
      />
      <TopDisplayPanel
        options={displayPanelOptions}
      />
    </>
  );
}
