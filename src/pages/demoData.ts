export const demoNodes = [
  {
    data: {
      id: "C1",
      type: "client",
      label: "NSC-1",
      customData: {
        cls: "REMOTE"
      }
    }
  },
  {
    data: {
      id: "C1I",
      type: "interface",
      label: "nsm-1/tap1",
      parent: "C1"
    }
  },
  {
    data: {
      id: "F1",
      type: "forwarder",
      label: "FWD-1"
    }
  },
  {
    data: {
      id: "F1IC1",
      type: "interface",
      label: "nsm-1/tap1",
      parent: "F1"
    }
  },
  {
    data: {
      id: "F1IE1",
      type: "interface",
      label: "nsm-1/memif1",
      parent: "F1"
    }
  },
  {
    data: {
      id: "E1",
      type: "endpoint",
      label: "NSE-1"
    }
  },
  {
    data: {
      id: "E1I",
      type: "interface",
      label: "nsm-1/memif1",
      parent: "E1"
    }
  },

  {
    data: {
      id: "C2",
      type: "client",
      label: "NSC-2"
    }
  },
  {
    data: {
      id: "C2I",
      type: "interface",
      label: "nsm-2/tap1",
      parent: "C2"
    }
  },
  {
    data: {
      id: "F2",
      type: "forwarder",
      label: "FWD-2"
    }
  },
  {
    data: {
      id: "F2CI1",
      type: "interface",
      label: "nsm-2/wg1",
      parent: "F2"
    }
  },
  {
    data: {
      id: "F2EI1",
      type: "interface",
      label: "nsm-2/memif1",
      parent: "F2"
    }
  },
  {
    data: {
      id: "F1CI2",
      type: "interface",
      label: "nsm-2/tap1",
      parent: "F1"
    }
  },
  {
    data: {
      id: "F1EI2",
      type: "interface",
      label: "nsm-2/wg1",
      parent: "F1"
    }
  },
  {
    data: {
      id: "E2",
      type: "endpoint",
      label: "NSE-2"
    }
  },
  {
    data: {
      id: "E2I",
      type: "interface",
      label: "nsm-2/memif1",
      parent: "E2"
    }
  }
];

export const demoEdges = [
  {
    data: {
      id: "c1i-f1ic1",
      type: "interfaceConnection",
      source: "C1I",
      target: "F1IC1",
      healthy: false
    }
  },
  {
    data: {
      id: "f1ic1-f1ei1",
      type: "interfaceCrossConnection",
      source: "F1IC1",
      target: "F1IE1",
      healthy: false
    }
  },
  {
    data: {
      id: "f1ie1-e1i",
      type: "interfaceConnection",
      source: "F1IE1",
      target: "E1I",
      label: "10ms",
      healthy: false
    }
  },
  {
    data: {
      id: "c2i-f1ci2",
      type: "interfaceConnection",
      source: "C2I",
      target: "F1CI2",
      healthy: true
    }
  },
  {
    data: {
      id: "f1ci2-f1ei2",
      type: "interfaceCrossConnection",
      source: "F1CI2",
      target: "F1EI2"
    }
  },
  {
    data: {
      id: "f1ei2-f2ci1",
      type: "interfaceConnection",
      source: "F1EI2",
      target: "F2CI1"
    }
  },
  {
    data: {
      id: "f2ci1-f2ei1",
      type: "interfaceCrossConnection",
      source: "F2CI1",
      target: "F2EI1"
    }
  },
  {
    data: {
      id: "f2ei1-e2i",
      type: "interfaceConnection",
      source: "F2EI1",
      target: "E2I"
    }
  }
];
