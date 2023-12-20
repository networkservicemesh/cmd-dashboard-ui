// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const layouts: Record<string, any> = {
  random: {
    name: "random",
    animate: true
  },
  grid: {
    name: "grid",
    animate: true
  },
  circle: {
    name: "circle",
    animate: true
  },
  breadthfirst: {
    name: "breadthfirst",
    animate: true
  },
  klay: {
    name: "klay",
    animate: true,
    padding: 4,
    nodeDimensionsIncludeLabels: true,
    klay: {
      spacing: 40,
      mergeEdges: false
    }
  },
  fcose: {
    name: "fcose",
    animate: true,
    tile: true,
    tilingPaddingHorizontal: 10
  },
  cose: {
    name: "cose",
    animate: true
  },
  cola: {
    name: "cola",
    animate: true,
    maxSimulationTime: 40
  },
  dagre: {
    name: "dagre",
    animate: false,
    rankDir: "LR",
    rankSep: 70,
    fit: true
  }
};

["box", "disco", "force", "layered", "mrtree", "random", "stress"].forEach(
  (elkAlgo) => {
    layouts[`elk_${elkAlgo}`] = {
      name: "elk",
      animate: true,
      elk: {
        algorithm: elkAlgo
      }
    };
  }
);
