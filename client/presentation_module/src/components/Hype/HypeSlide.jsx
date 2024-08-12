import { h } from "preact";
import "./HypeSlide.scss"

function HypeSlide() {

    return (
        // Your presentation is sized based on the width and height of
        // our parent element. Make sure the parent is not 0-height.
        <section>
            <section>
                <h1>Lidando com o Hype</h1>
            </section>
            <section>
                <h1>Internet das Coisas</h1>
            </section>
            <section>
                <h1>Blockchain</h1>
            </section>

            <section
                data-background-video="/assets/flame-bg-frame.mp4">
                <h1 id="ai-text" style="opacity: 0;">Inteligência Artificial</h1>
            </section>
        </section>
    );
}

export default HypeSlide;
