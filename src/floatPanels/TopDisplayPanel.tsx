import { useState } from 'react';
import TopDisplayOptionsPanel from "./TopDisplayOptionsPanel";
import { DisplayPanelOptionEnv } from "../model";

interface TopDisplayPanelProps {
    options: DisplayPanelOptionEnv[];
}

export default function TopDisplayPanel({ options }: TopDisplayPanelProps) {
    const [showOptionsPanel, setShowOptionsPanel] = useState(false);

    return (
        <>
            <div
                className="top-display-panel"
                onClick={() => setShowOptionsPanel(!showOptionsPanel)}
                >
                <div>Display</div>
            </div>
            {showOptionsPanel && <TopDisplayOptionsPanel options={options} setShowOptionsPanel={setShowOptionsPanel}/>}
        </>
    );
}
