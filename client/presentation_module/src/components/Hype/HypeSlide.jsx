import {h} from "preact";
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
                <h1 style="color: #3B82F6;">Internet das Coisas</h1>
                {/*<ul>*/}
                {/*    <li className="fragment">*/}
                {/*        Desenvolvimento mobile e suas vertentes*/}
                {/*    </li>*/}
                {/*    <li className="fragment">*/}
                {/*        Cidades inteligentes*/}
                {/*    </li>*/}
                {/*    <li className="fragment">*/}
                {/*        Automação residencial*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </section>
            <section>
                <h1 style="color: #10B981;">Blockchain</h1>
                {/*<ul>*/}
                {/*    <li className="fragment">*/}
                {/*        Criptomoedas e ativos digitais*/}
                {/*    </li>*/}
                {/*    <li className="fragment">*/}
                {/*        Contratos inteligentes*/}
                {/*    </li>*/}
                {/*    <li className="fragment">*/}
                {/*        Sistemas de votação descentralizados*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </section>

            <section
                data-background-video="/assets/flame-bg-frame.mp4">
                <h1 id="ai-text" style="opacity: 0; color: #EC4899;">Inteligência Artificial</h1>
                {/*<ul>*/}
                {/*    <li className="fragment">*/}
                {/*        Aprendizado de máquina*/}
                {/*    </li>*/}
                {/*    <li className="fragment">*/}
                {/*        Processamento de linguagem natural*/}
                {/*    </li>*/}
                {/*    <li className="fragment">*/}
                {/*        Visão computacional*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </section>
        </section>
    );
}

export default HypeSlide;

