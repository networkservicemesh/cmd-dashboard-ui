import * as React from "react";
import { Stylesheet } from "cytoscape";
import cloneDeep from 'lodash/cloneDeep';
import CytoscapeCanvas from "./CytoscapeCanvas";
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
  Edge
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
        height: InterfaceSize
      }
    },
    {
      selector: `node[type = '${NodeType.Interface}'][label]`,
      style: {
        shape: (node: { data: (arg0: string) => string | string[] }) =>
          node.data("label").includes("memif")
            ? InterfaceShape.MEMIF
            : node.data("label").includes("wg")
            ? InterfaceShape.WIREGUARDG
            : InterfaceShape.TAP
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
    }
  ];
}

export default function Dataplane({ nodes, edges }: DataplaneProps) {
  const [stylesheet] = React.useState<Stylesheet[]>(getDataplaneStylesheet() as Stylesheet[]);
  const dataplaneNodes = nodes
      .filter(n => AllowedNodeTypes.Dataplane.includes(n.data.type))
      .map(n => ({ ...n, data: cloneDeep(n.data) }));
  const dataplaneEdges = edges
      .filter(e => AllowedEdgeTypes.Dataplane.includes(e.data.type))
      .map(e => ({ ...e, data: cloneDeep(e.data) }));

  return (
    <CytoscapeCanvas
      nodes={dataplaneNodes}
      edges={dataplaneEdges}
      stylesheet={stylesheet}
    />
  );
}
