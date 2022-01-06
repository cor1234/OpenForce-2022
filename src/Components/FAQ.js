import React from "react";
import "./styles/faq.css";

function FAQ({ faq,index }) {
    const toggle = () => {};
    return (
        <>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={"#collapseOne-"+index}
                            aria-expanded={false}
                            aria-controls="collapseOne"
                        >
                            {faq.question}
                        </button>
                    </h2>
                    <div
                        id={"collapseOne-"+index}
                        class="accordion-collapse collapse"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ;
