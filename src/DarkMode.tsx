import { useState } from 'react' 
import "../src/DarkMode.css"
export const DarkMode = () => { 
    const [isDarkMode, setIsDarkMode] = useState(false);
    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
            <div className="toggle-container">
                <input
                    type="checkbox"
                    id="toggle"
                    className="toggle-input"
                    checked={isDarkMode}
                    onChange={handleToggle}
                />
                <label htmlFor="toggle" className="toggle-label">
                    <span className="toggle-circle"></span>
                </label>
            </div>
            <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
        </div>
    )
} 
