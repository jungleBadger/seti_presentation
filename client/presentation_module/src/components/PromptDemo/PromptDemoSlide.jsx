import { h } from "preact";
import "./PromptDemoSlide.scss"

function PromptDemoSlide() {

    const JSONContent = `function pollGamepad() {
        const gamepads = navigator.getGamepads();
        const gp = gamepads[0]; // Assuming the PS5 controller is the first connected gamepad

        if (gp) {
            // Check for button presses
            if (gp.buttons[0].pressed) { // X Button
                Reveal.right(); // Move to the next slide
            }
            if (gp.buttons[2].pressed) { // Square Button
                Reveal.left(); // Move to the previous slide
            }
            if (gp.buttons[3].pressed) { // Triangle Button
                Reveal.up(); // Move to the previous vertical slide
            }
            if (gp.buttons[1].pressed) { // Circle Button
                Reveal.down(); // Move to the next vertical slide
            }
        }
    }

    // Gamepad connection handler
    window.addEventListener("gamepadconnected", function(e) {
        console.log("Gamepad connected:", e.gamepad);

        // Poll the gamepad at regular intervals
        setInterval(pollGamepad, 100); // Poll every 100ms
    });

    // Gamepad disconnection handler
    window.addEventListener("gamepaddisconnected", function(e) {
        console.log("Gamepad disconnected:", e.gamepad);
    })`;

    const secondJSONContent = `function pollGamepad() {
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
    }`

    return (
        // Your presentation is sized based on the width and height of
        // our parent element. Make sure the parent is not 0-height.
        <section>


            <section>
                <div className="tooltip">Gere um código para controlar minha apresentação reveal.js usando um
                    controle de PS5
                </div>
            </section>

            <section>
                  <pre>
                    <code data-line-numbers="2|7-18|23-28">
                        {JSONContent}
                    </code>
                </pre>
            </section>

            <section>
                <div className="tooltip">Eu gostaria de mapear o direcional tambem, e que o controle siga um esquema wasd</div>
            </section>

            <section>
                  <pre>
                    <code data-line-numbers="7-18|21-32">
                        {secondJSONContent}
                    </code>
                </pre>
            </section>

        </section>
    );
}

export default PromptDemoSlide;
