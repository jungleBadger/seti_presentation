import { h } from "preact";
import "./JobPosting.scss";

function JobPostingSlide() {
    return (
        <section>
            <h1>Exciting Opportunities at IBM!</h1>
            <p>Explore our latest openings and take the next step in your career:</p>

            <div className="job-posting">
                <h2>Vaga Jovem Aprendiz Técnico – Vaga exclusiva PCD</h2>
                <p>Kickstart your career with hands-on technical experience.</p>
                <a href="https://ibm.biz/BdKXeN" target="_blank" rel="noopener noreferrer">Learn more & apply</a>
            </div>

            <div className="job-posting">
                <h2>Vaga Programa Estágio IBM Sales - São Paulo</h2>
                <p>Join our sales team and grow with IBM’s dynamic environment.</p>
                <a href="https://ibm.biz/brfutureclub" target="_blank" rel="noopener noreferrer">Learn more & apply</a>
            </div>
        </section>

    );
}

export default JobPostingSlide;
