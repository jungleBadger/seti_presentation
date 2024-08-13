import { h } from "preact";
import "./QRCodeSlide.scss";

function QRCodeSlide() {
    return (
        <section >
            <div
                className="content-box"
                style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <div style={{width: '33%', height: '33%'}}>
                    <svg
                        style={{width: '100%', height: '100%'}}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41" shape-rendering="crispEdges">
                        <path fill="#ffffff" d="M0 0h41v41H0z"/>
                        <path stroke="#000000"
                              d="M4 4.5h7m3 0h3m3 0h1m1 0h4m1 0h1m2 0h7M4 5.5h1m5 0h1m2 0h2m1 0h1m2 0h2m1 0h1m2 0h2m1 0h1m1 0h1m5 0h1M4 6.5h1m1 0h3m1 0h1m1 0h4m2 0h2m3 0h3m4 0h1m1 0h3m1 0h1M4 7.5h1m1 0h3m1 0h1m1 0h2m8 0h2m2 0h2m2 0h1m1 0h3m1 0h1M4 8.5h1m1 0h3m1 0h1m1 0h2m2 0h5m3 0h2m1 0h1m2 0h1m1 0h3m1 0h1M4 9.5h1m5 0h1m1 0h3m2 0h2m2 0h1m1 0h1m1 0h2m3 0h1m5 0h1M4 10.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M12 11.5h2m4 0h1m1 0h1m2 0h4m1 0h1M4 12.5h1m1 0h5m3 0h4m3 0h1m1 0h1m2 0h1m1 0h1m1 0h5M5 13.5h2m1 0h2m2 0h4m1 0h1m2 0h4m3 0h1m2 0h2m1 0h4M4 14.5h1m4 0h2m2 0h7m1 0h1m3 0h1m3 0h1m2 0h1m1 0h2M6 15.5h2m1 0h1m1 0h1m2 0h2m1 0h1m2 0h4m1 0h3m1 0h1m2 0h4M5 16.5h1m2 0h1m1 0h3m1 0h1m1 0h1m1 0h1m1 0h1m3 0h1m1 0h1m1 0h2m1 0h3m1 0h1M4 17.5h2m2 0h2m1 0h1m1 0h2m1 0h2m1 0h1m1 0h2m2 0h1m1 0h1m1 0h2m2 0h4M4 18.5h2m4 0h1m2 0h8m1 0h1m1 0h1m3 0h5m1 0h2M5 19.5h2m1 0h1m3 0h2m2 0h1m1 0h2m5 0h1m3 0h3m1 0h2M4 20.5h1m1 0h2m2 0h1m1 0h3m1 0h4m1 0h1m2 0h1m1 0h1m1 0h2m1 0h2m3 0h1M5 21.5h1m2 0h2m1 0h2m1 0h2m1 0h1m5 0h2m2 0h1m2 0h2m1 0h2m1 0h1M6 22.5h1m2 0h3m3 0h1m1 0h1m1 0h1m2 0h1m1 0h1m1 0h1m1 0h1m2 0h2m1 0h2M4 23.5h6m1 0h2m2 0h2m1 0h1m5 0h4m1 0h8M10 24.5h2m1 0h1m5 0h1m2 0h1m3 0h2m1 0h1m2 0h2M4 25.5h1m1 0h2m1 0h1m1 0h10m3 0h2m1 0h1m2 0h1m5 0h1M4 26.5h1m2 0h1m1 0h4m3 0h2m5 0h1m1 0h1m2 0h1m1 0h2m1 0h3M4 27.5h1m1 0h1m1 0h1m2 0h2m2 0h1m4 0h1m1 0h6m2 0h2m1 0h3M4 28.5h1m5 0h2m2 0h5m2 0h1m1 0h1m2 0h9M12 29.5h2m3 0h1m2 0h5m3 0h1m3 0h1m1 0h3M4 30.5h7m2 0h1m1 0h2m2 0h3m2 0h1m1 0h3m1 0h1m1 0h1m1 0h2M4 31.5h1m5 0h1m1 0h1m3 0h2m1 0h7m1 0h2m3 0h5M4 32.5h1m1 0h3m1 0h1m1 0h3m4 0h2m7 0h6m1 0h2M4 33.5h1m1 0h3m1 0h1m1 0h4m2 0h2m1 0h2m2 0h1m1 0h3m2 0h2m1 0h2M4 34.5h1m1 0h3m1 0h1m1 0h1m1 0h2m3 0h2m1 0h1m1 0h8m1 0h1M4 35.5h1m5 0h1m2 0h3m1 0h3m2 0h4m3 0h1m2 0h3M4 36.5h7m1 0h2m1 0h1m1 0h5m1 0h1m2 0h4m1 0h1m1 0h1m1 0h1"/>
                    </svg>
                </div>

                <div style={{textAlign: 'center', marginTop: '20px', color: '#fff', textShadow: '0 0 5px #000'}}>
                    <h2 style={{margin: '0', padding: '0', fontSize: '1.5em', fontWeight: 'bold'}}>
                        Acompanhe em tempo real!
                    </h2>
                </div>

                <div>
                    <p style={{fontSize: '1.2em', marginTop: '30px'}}>
                        Leia o QR Code ou acesse em <a
                        href="https://junglebadger.github.io/seti_presentation">junglebadger.github.io/seti_presentation</a>
                    </p>
                </div>
            </div>

        </section>
    );
}

export default QRCodeSlide;
