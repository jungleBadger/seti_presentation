import { h } from "preact";
import "./JobPosting.scss";

function JobPostingSlide() {
    return (
        <section>
            <section>
                <h1>Vagas IBM</h1>
                <div className="job-offer-link-wrapper">
                    <a href="https://careers.ibm.com/" className="apply-button" target="_blank"
                       rel="noopener noreferrer">Acesse o site</a>

                </div>
            </section>
            <section>
                <div>

                    <div className="job-posting">
                        <h3>Jovem Aprendiz Técnico</h3>
                        <div className="job-offer-link-wrapper">
                            <p className="tagline">Exclusivo PCD.</p>
                            <a href="https://ibm.biz/BdKXeN" className="apply-button" target="_blank"
                               rel="noopener noreferrer">Aplicar</a>
                        </div>
                        <div>
                            <a href="https://ibm.biz/BdKXeN" className="apply-button" target="_blank"
                               rel="noopener noreferrer">https://ibm.biz/BdKXeN</a>

                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="job-posting">
                    <h3>Programa Estágio em Desenvolvimento</h3>
                    <div className="job-offer-link-wrapper">
                        <p className="tagline">Exclusivo Hortolândia.</p>
                        <a href="https://ibm.biz/BdKpdd" className="apply-button" target="_blank"
                           rel="noopener noreferrer">Aplicar</a>
                    </div>
                    <div>
                        <a href="https://ibm.biz/BdKpdd" className="apply-button" target="_blank"
                           rel="noopener noreferrer">https://ibm.biz/BdKpdd</a>
                    </div>
                </div>
            </section>

            <section>
                <div className="job-posting">
                    <h3>Programa Estágio em Compras</h3>
                    <div className="job-offer-link-wrapper">
                        <p className="tagline">Administrativo.</p>
                        <a href="https://ibm.biz/BdKpdB" className="apply-button" target="_blank"
                           rel="noopener noreferrer">Aplicar</a>
                    </div>
                    <div>
                        <a href="https://ibm.biz/BdKpdB" className="apply-button" target="_blank"
                           rel="noopener noreferrer">https://ibm.biz/BdKpdB</a>
                    </div>
                </div>
            </section>

            <section>
                <div className="job-posting">
                    <h3>Programa Estágio IBM Sales</h3>
                    <div className="job-offer-link-wrapper">
                        <p className="tagline">Exclusivo São Paulo.</p>
                        <a href="https://ibm.biz/brfutureclub" className="apply-button" target="_blank"
                           rel="noopener noreferrer">Aplicar</a>
                    </div>
                    <div>
                        <a href="https://ibm.biz/brfutureclub" className="apply-button" target="_blank"
                           rel="noopener noreferrer">https://ibm.biz/brfutureclub</a>

                    </div>
                </div>
            </section>

        </section>
    );
}

export default JobPostingSlide;
