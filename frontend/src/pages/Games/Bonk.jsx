import React, { useState, useContext, useEffect } from 'react';
import { Card } from '../../components/utils/Card';
import { CTA } from '../../components/utils/CTA';
import { Chat } from '../../components/Chat/Chat';
import { language } from '../../scripts/languages';

<<<<<<< HEAD
import { ProfileContext, LangContext } from '../../Contexts';
import './bonk.css';
  
  export function Bonk() {
      const [popUp, setPopUp] = useState(true);
      const [mode, setMode] = useState("bot");
      const [htmlContent, setHtmlContent] = useState('');
      const [playClicked, setPlayClicked] = useState(false);
      const profile = useContext(ProfileContext);
      const lang = useContext(LangContext);
      const [error, setError] = useState('');
      

    useEffect(async () => {
        if (!document.getElementById("pakoScript")) {
            let pakoScript = document.createElement('script');
            pakoScript.id = "pakoScript";
            pakoScript.src = "/static/pako_inflate.min.js";
            document.body.appendChild(pakoScript);
            await new Promise(r => setTimeout(r, 100));
=======
export function Bonk({ profile, lang }) {
    const [popUp, setPopUp] = useState(true);
    const [playClicked, setPlayClicked] = useState(false);
    
    window.godotFunctions = {};
    window.externalator = {
        addGodotFunction: (n,f) => {
            window.godotFunctions[n] = f;
>>>>>>> 3b967e7 (~ | Basically changed everything)
        }
    }

    useEffect(() => {
        const loadScripts = async () => {
            try {
                await loadScript('/static/pako_inflate.min.js');
                await loadScript('/static/bonk-client.js');
                await loadScript('/static/status.js');
            } catch (error) {
                console.error('Error loading scripts:', error);
            }
        };

        loadScripts();
    }, []);

    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    };

    const handlePlayClick = () => {
    	godotFunctions.join_request()
    	setPopUp(false);
    	setPlayClicked(true);
    };

    return (
        <>
            {popUp ? (
                <Card className="absolute z-50 p-4 px-16 flex flex-col items-center">
                    <h1 className="font-semibold text-4xl mb-4">BONK</h1>
                    <CTA onClick={handlePlayClick}>{language.play[lang]}</CTA>
                </Card>
            ) : null}
            <canvas id="canvas" style={{ display: playClicked ? 'block' : 'none' }}>
                HTML5 canvas appears to be unsupported in the current browser.
                Please try updating or use a different browser.
            </canvas>
            <div id="status">
                <div id="status-progress" style={{ display: 'none' }} onContextMenu={(e) => e.preventDefault()}>
                    <div id="status-progress-inner"></div>
                </div>
                <div id="status-indeterminate" style={{ display: 'none' }} onContextMenu={(e) => e.preventDefault()}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div id="status-notice" className="godot" style={{ display: 'none' }}></div>
            </div>
            <Chat />
        </>
    );
}

