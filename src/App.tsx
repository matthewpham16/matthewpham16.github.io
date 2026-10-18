import React, {useState, useEffect} from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
  Resume,
} from "./components";
import { Routes, Route, useLocation } from "react-router-dom";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    const location = useLocation();

    // Navigation from another route passes the target section id in state.
    useEffect(() => {
        const target = (location.state as {scrollTo?: string} | null)?.scrollTo;
        const el = target ? document.getElementById(target) : null;
        if (el) {
            el.scrollIntoView({behavior: 'smooth'});
        } else {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }
    }, [location]);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <Routes>
            <Route path="/" element={
                <FadeIn transitionDuration={700}>
                    <Main/>
                    <Expertise/>
                    <Timeline/>
                    <Project/>
                    <Contact/>
                </FadeIn>
            }/>
            <Route path="/resume" element={<Resume/>}/>
        </Routes>
        <Footer />
    </div>
    );
}

export default App;