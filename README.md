# Network Service Mesh Dashboard UI

NSM dashboard UI part working in conjunction with [the backend part](https://github.com/networkservicemesh/cmd-dashboard-backend)

Written in [React](https://react.dev/) using libraries:
- [Typescript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/)
- [Cytoscape](https://js.cytoscape.org/)
- [Chart.js](https://www.chartjs.org/)

The entire NSM dashboard deployment info see [here](https://github.com/networkservicemesh/deployments-k8s/tree/main/examples/observability/dashboard)

## Dev/debug

### To run dashboard UI locally:

1. `git clone git@github.com:networkservicemesh/cmd-dashboard-ui.git`
2. `cd cmd-dashboard-ui`
3. `nvm install` ([Node.js](https://nodejs.org/en) version specified in the .nvmrc file will be installed)
4. `npm install`
5. `npm run dev`
6. Open `http://localhost:3000` in the browser
7. The demo data from `cmd-dashboard-ui/src/model.ts` can be used for debugging
