import { DisplayPanelOptionEnv } from "../model";

interface TopDisplayOptionsPanelProps {
    options: DisplayPanelOptionEnv[];
    setShowOptionsPanel: (v: boolean) => void;
}

export default function TopDisplayOptionsPanel({ options, setShowOptionsPanel }: TopDisplayOptionsPanelProps) {
    return (
        <div className="top-display-options-panel" onMouseLeave={() => setShowOptionsPanel(false)}>
            {options.map((opt, index) => (
                <div key={index} className="top-display-options-panel-item" onClick={() => opt.onClick()}>
                    <input
                        type="checkbox"
                        checked={opt.checked}
                        onChange={() => {}}
                        className="top-display-options-panel-item"
                    />
                    {opt.label}
                </div>
            ))}
        </div>
    );
}
