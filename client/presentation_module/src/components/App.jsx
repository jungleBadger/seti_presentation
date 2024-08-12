import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";

import WhoAmISlide from "./WhoAmI/WhoAmISlide.jsx";
import HypeSlide from "./Hype/HypeSlide.jsx";
import DemoSlide from "./Demo/DemoSlide.jsx";
import PromptDemoSlide from "./PromptDemo/PromptDemoSlide.jsx";

import Reveal from "reveal.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm";

function App() {
    const deckDivRef = useRef(null); // reference to deck container div
    const deckRef = useRef(null); // reference to deck reveal instance

    useEffect(() => {
        // Prevents double initialization
        if (deckRef.current) return;

        deckRef.current = new Reveal(deckDivRef.current, {
            transition: "slide",
            // other config options
            plugins: [RevealHighlight]
        });

        const aiText = document.getElementById('ai-text');


        // Optionally, hide the text again if the slide changes
        deckRef.current.on('slidechanged', (event) => {
            if (!event.currentSlide.contains(aiText)) {
                aiText.style.opacity = "0";
            } else {
                aiText.style.opacity = "1";
            }
        });


        deckRef.current.initialize().then(() => {


            // Setup PS5 controller support after initialization
            const pollGamepad = () => {
                const gamepads = navigator.getGamepads();
                const gp = gamepads[0]; // Assuming the PS5 controller is the first connected gamepad

                if (gp) {
                    // D-pad (Directional pad) button mappings
                    if (gp.buttons[12].pressed) { // D-pad Up
                        deckRef.current.up(); // Move up
                    }
                    if (gp.buttons[13].pressed) { // D-pad Down
                        deckRef.current.down(); // Move down
                    }
                    if (gp.buttons[14].pressed) { // D-pad Left
                        deckRef.current.left(); // Move left
                    }
                    if (gp.buttons[15].pressed) { // D-pad Right
                        deckRef.current.right(); // Move right
                    }

                    // Icons buttons mappings (Triangle, Circle, Cross, and Square)
                    if (gp.buttons[3].pressed) { // Triangle Button
                        deckRef.current.up(); // Move up (same as D-pad Up)
                    }
                    if (gp.buttons[1].pressed) { // Circle Button
                        deckRef.current.right(); // Move right (same as D-pad Right)
                    }
                    if (gp.buttons[0].pressed) { // Cross Button
                        deckRef.current.down(); // Move down (same as D-pad Down)
                    }
                    if (gp.buttons[2].pressed) { // Square Button
                        deckRef.current.left(); // Move left (same as D-pad Left)
                    }
                }
            };

            const gamepadConnected = () => {
                console.log("Gamepad connected");
                const intervalId = setInterval(pollGamepad, 100); // Poll every 100ms

                return () => clearInterval(intervalId); // Cleanup
            };

            const gamepadDisconnected = () => {
                console.log("Gamepad disconnected");
            };

            window.addEventListener("gamepadconnected", gamepadConnected);
            window.addEventListener("gamepaddisconnected", gamepadDisconnected);

            // Cleanup event listeners on unmount
            return () => {
                window.removeEventListener("gamepadconnected", gamepadConnected);
                window.removeEventListener("gamepaddisconnected", gamepadDisconnected);
            };
        });

        return () => {
            try {
                if (deckRef.current) {
                    deckRef.current.destroy();
                    deckRef.current = null;
                }
            } catch (e) {
                console.warn("Reveal.js destroy call failed.");
            }
        };
    }, []);

    return (
        // Your presentation is sized based on the width and height of
        // our parent element. Make sure the parent is not 0-height.
        <div className="reveal" ref={deckDivRef}>
            <div className="slides">

                <WhoAmISlide />

                <HypeSlide />

                <DemoSlide />

                <PromptDemoSlide />


                <section>
                    <section data-auto-animate>
                        <h1>O que vem depois?</h1>
                    </section>
                    <section>
                        <h1 style="color: #3B82F6;">Computação quântica</h1>
                    </section>
                    <section data-auto-animate data-auto-animate-id="two" data-auto-animate-restart>
                        <section>
                            <h2 style="color: #3B82F6;">1</h2>
                            <h2 style="color: #3B82F6;">2</h2>
                        </section>
                    </section>
                    <section data-auto-animate data-auto-animate-id="two" data-auto-animate-restart>
                        <h1 style="color: #10B981;">Computaçao Edge "de borda"</h1>
                    </section>
                    <section data-auto-animate data-auto-animate-id="two" data-auto-animate-restart>
                        <h1 style="color: #EC4899;">5G e 6G</h1>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default App;
