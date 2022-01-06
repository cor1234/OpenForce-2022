import React, { useState } from 'react'
import FAQ from './FAQ';

export default function FAQCont() {

    const [faqs, setfaqs] = useState([
        {
            question: "This is a sample faq",
            answer: "This is a sample answer",
            open: true,
        },
        {
            question: "This is yet again a sample faq",
            answer: "Yes again a sample answer",
            open: false,
        },
        {
            question: "This is yet again a sample faq",
            answer: "Yes again a sample answer",
            open: false,
        },
        {
            question: "Oops again a sample faq",
            answer: "sample answer cheers :)",
            open: false,
        }
    ]);

    return (
        <div className='faqcont' id="faqclick">
            <div className='heading'>
                FAQs
            </div>
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <FAQ
                        faq={faq}
                        index={i}
                    />
                ))}
            </div>
        </div>
    )
}
