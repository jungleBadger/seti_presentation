import { h } from "preact";
import "./WhoAmISlide.scss"


function WhoAmISlide() {

    return (
        <section>




            <section data-background-image="/assets/pic1.jpg" className="who-am-i-content-box">
                <h1>Quem sou eu</h1>
            </section>


            <section data-background-image="/assets/pic1.jpg" className="who-am-i-content-box">

                <h1>Tecnologias</h1>

                <div className="tech-card-wrapper">
                    <a href="https://nodejs.org" target="_blank">
                        <div className="tech-card node" style="color: #83CD29;">
                            <div className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                     width="160px" style="fill: #83CD29;">
                                    <path
                                        fill="#83CD29"
                                        d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"/>
                                </svg>
                            </div>
                            <h2>Node.js</h2>
                        </div>
                    </a>

                    <a href="https://www.python.org" target="_blank">
                        <div className="tech-card python" style="color: #306998;">
                            <div className="icon-container">
                                <svg width="160px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                                     style="fill: #306998;">
                                    <path fill="#306998" d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/>
                                </svg>
                            </div>
                            <h2>Python</h2>
                        </div>
                    </a>
                </div>
            </section>


            <section data-background-image="/assets/pic1.jpg" className="who-am-i-content-box">

                <h1>Empresas</h1>

                <div className="tech-card-wrapper">
                    <a href="https://ibm.com" target="_blank">
                        <div className="tech-card ibm" style="color: #1F70C1;">
                            <div className="icon-container">

                                <svg width="240" height="240" viewBox="0 0 1000 401.149">
                                    <g fill="#1F70C1">
                                        <path d="M0 373.217h194.433v27.833H0zM0 319.83h194.433v27.931H0zM55.468 266.541h83.399v27.932H55.468zM55.468 213.253h83.399v27.932H55.468zM55.468 159.964h83.399v27.932H55.468zM55.468 106.577h83.399v27.932H55.468zM0 53.288h194.433V81.22H0zM0 0h194.433v27.932H0zM222.167 347.761h299.029a99.235 99.235 0 0 0 11.094-27.932H222.167v27.932zM497.92 213.253H277.734v27.932h243.463c-6.34-10.698-14.165-20.107-23.277-27.932zM277.734 159.964v27.932H497.92c9.311-7.825 17.135-17.235 23.277-27.932H277.734zM521.197 53.288h-299.03V81.22H532.29c-2.575-9.905-6.339-19.314-11.093-27.932zM429.279 0H222.167v27.932h278.526A105.147 105.147 0 0 0 429.279 0zM277.734 106.577h83.3v27.932h-83.3zM444.433 134.509h87.163c2.476-8.914 3.764-18.324 3.764-27.932h-90.927v27.932zM277.734 266.541h83.3v27.932h-83.3zM444.433 266.541v27.932h90.927c0-9.608-1.288-19.017-3.764-27.932h-87.163zM222.167 400.852l207.112.297c27.734 0 52.793-10.697 71.513-27.932H222.167v27.635zM555.567 373.217h138.866v27.833H555.567zM555.567 319.83h138.866v27.931H555.567zM611.034 266.541h83.399v27.932h-83.399zM611.034 213.253h83.399v27.932h-83.399zM733.063 53.288H555.567V81.22H742.67zM714.639 0H555.567v27.932h168.68zM861.034 373.217H1000v27.833H861.034zM861.034 319.83H1000v27.931H861.034zM861.034 266.541h83.399v27.932h-83.399zM861.034 213.253h83.399v27.932h-83.399zM861.034 187.896h83.399v-27.932H785.559l-7.825 22.584-7.825-22.584H611.034v27.932h83.399v-25.654l8.816 25.654h148.97l8.815-25.654zM944.433 106.577H803.982l-9.608 27.932h150.059zM840.927 0l-9.608 27.932H1000V0zM777.734 400.852l9.607-27.635h-19.215zM759.311 347.761h36.846l9.905-27.931h-56.557zM740.59 294.473h74.287l9.806-27.932h-93.899zM721.969 241.185h111.628l9.509-27.932H712.361zM611.034 134.509h150.059l-9.607-27.932H611.034zM812.896 81.22H1000V53.288H822.405z"/>
                                    </g>
                                </svg>
                            </div>
                            <h2>IBM</h2>
                        </div>
                    </a>

                    <a href="https://www.udacity.com" target="_blank">
                        <div className="tech-card udacity" style="color: #02b3e4;">
                            <div className="icon-container">
                                <svg xmlns="http://www.w3.org/2000/svg" width="160px" height="240px" viewBox="0 0 40 40"
                                     id="Layer_1">
                                    <g id="_x38_0-mark-white">
                                        <path id="mark_28_" className="st0" style='fill:#02b3e4'
                                              d="M13.3 0L0 7.7v17.6C0 33.4 6.5 40 14.6 40c2.7 0 5.2-.7 7.4-1.9l10.8-6.2C37.1 29.6 40 25.2 40 20V1.6L37.4.1 26 6.2v19.2c0 .8-.1 1.6-.2 2.4-.2.8-.4 1.5-.7 2.2l-.3.6c-.4 0-2.9-.9-4.2-1.8-.6-.4-1.1-.8-1.6-1.3s-.9-1-1.3-1.6c-.4-.6-.7-1.2-1-1.8-.3-.6-.5-1.3-.6-2-.1-.7-.1-1.4-.1-2.1V1.6L13.3 0zm6.5 36.2c-.7.3-1.7.7-2.5.9-.8.2-1.5.2-2.3.2-.8 0-1.6-.1-2.4-.3-.8-.2-1.5-.4-2.2-.7-.7-.3-1.4-.7-2-1.1C6.6 34.1 5.7 33.1 5 32c-.4-.6-.8-1.3-1.1-2-.3-.7-.5-1.5-.7-2.3-.2-.8-.2-1.6-.2-2.4V9.2l10-6.1V20c0 6.4 4.7 11.8 10.7 13.1-.2.3-.4.6-.7.8-1.1 1.1-2 1.8-3.2 2.3zm17-14c-.1.7-.4 1.4-.6 2-.3.6-.6 1.2-1 1.8-.4.6-1.6 2.1-3.2 3-1.6.9-3.1 1.2-4 1.4.6-1.6 1-3.2 1-5V7.7l8-4.6V20c0 .8 0 1.5-.2 2.2z"/>
                                    </g>

                                </svg>
                            </div>
                            <h2>Udacity</h2>
                        </div>
                    </a>
                </div>
            </section>

            <section data-background-position="0 30%" data-background-image="/assets/pic3.jpg" className="who-am-i-content-box">
            </section>



            </section>
    );
}

export default WhoAmISlide;
