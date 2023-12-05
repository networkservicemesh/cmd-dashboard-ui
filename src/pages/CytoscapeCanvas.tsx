import CytoscapeComponent from "react-cytoscapejs";
import { Stylesheet, use as cytoscapeUse } from "cytoscape";
import dagre from "cytoscape-dagre";
import hash from 'object-hash';
import { layouts } from "../layouts";
//import { demoNodes, demoEdges } from "./demoData"; // Keep this for debug purposes
import {
  Node,
  Edge
} from "../model";

cytoscapeUse(dagre);

interface CytoscapeCanvasProps {
  nodes: Node[];
  edges: Edge[];
  stylesheet: Stylesheet[];
}

function generateCytoscapeKey(nodes: Node[], edges: Edge[]) {
  const nodesKey = nodes.map(node => node.data.label).sort().join(':');
  const edgesKey = edges.map(edge => `${edge.data.id}-${edge.data.healthy}`).sort().join(':');
  const hashedKey = hash(`${nodesKey}-${edgesKey}`, { algorithm: 'md5' });
  return hashedKey;
}

export default function CytoscapeCanvas({ nodes, edges, stylesheet }: CytoscapeCanvasProps) {
  return (
    <div className="cytoscape-canvas">
      { nodes.length < 2 ? 
        <div className="empty-canvas">No data available.</div> :
        <CytoscapeComponent
          key={generateCytoscapeKey(nodes, edges)}
          elements={[...nodes, ...edges]}
          style={{ width: "100%", height: "100%" }}
          layout={layouts.dagre}
          stylesheet={stylesheet}
        /> }
    </div>
    );
}
