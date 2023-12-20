import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNodes, setEdges, setSelectedMenuItem } from './store/actions';
import { AppDispatch, RootState } from './store/store';
import Dataplane from './pages/Dataplane';
import Overview from './pages/Overview';
import apiService from './apiService';
import './styles.css';

function App() {
  const nodes = useSelector((state: RootState) => state.nodes);
  const edges = useSelector((state: RootState) => state.edges);
  const selectedMenuItem = useSelector((state: RootState) => state.app.selectedMenuItem);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedNodes = await apiService.getNodes();
        const fetchedEdges = await apiService.getEdges();
  
        dispatch(setNodes(fetchedNodes));
        dispatch(setEdges(fetchedEdges));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, Number(process.env.POLLING_INTERVAL_SECONDS) * 1000 );

    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div className="app">
      <header className="header">
        <img src="./favicon-32.png" alt="nsm_icon" draggable="false" />
        <h1 className="header-title">Network Service Mesh Dashboard</h1>
      </header>
      <main className="main">
        <nav className="left-panel">
          <ul className="menu">
            <li
              className={`menu-item ${selectedMenuItem === 1 ? 'selected' : ''}`}
              onClick={() => dispatch(setSelectedMenuItem(1))}
            >
              Overview
            </li>
            <li
              className={`menu-item ${selectedMenuItem === 2 ? 'selected' : ''}`}
              onClick={() => dispatch(setSelectedMenuItem(2))}
            >
              Dataplane
            </li>
            {/* <li
              className={`menu-item ${selectedMenuItem === 3 ? 'selected' : ''}`}
              onClick={() => dispatch(setSelectedMenuItem(3))}
            >
              Controlplane
            </li>
            <li
              className={`menu-item ${selectedMenuItem === 4 ? 'selected' : ''}`}
              onClick={() => dispatch(setSelectedMenuItem(4))}
            >
              Network Services
            </li> */}
          </ul>
        </nav>
        {
          selectedMenuItem === 1 ? <Overview/> :
          selectedMenuItem === 2 ? <Dataplane nodes={nodes} edges={edges}></Dataplane> :
          selectedMenuItem === 3 ? null :
          selectedMenuItem === 4 ? null :
          null
        }
      </main>
      <footer className="footer">
        <span className="footer-text">Copyright © 2023 The Network Service Mesh authors</span>
      </footer>
    </div>
  );
}

export default App;
