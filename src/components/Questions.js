import React from 'react';

const Questions=()=>{
    const faqData=[
        {
            question:"How do I create an account?",
            answer:"To create an account, click on the 'Sign Up' button at the top right corner and fill in the required details."},
            {
            question:"Is there a mobile app available?",
            answer:"Yes, Study Buddy is available on both iOS and Android platforms. You can download it from the respective app stores."},
            {
            question:"Can I customize my study plan?",
            answer:"Absolutely! Our platform allows you to tailor your study plans according to your preferences and goals."
            },
            {
            question:"What kind of help is available?",
            answer:"We offer a wide range of help including Notes, Timer, PPlan schedule, and interactive exercises curated by our AI." ,
            }

    ]
    return(
        <div>
        <div>Questions Component</div>
        <h3>Frequently Asked Questions</h3>
        {faqData.map((i,index)=>{
            return (
                <div key={index}>
                    <h4>{i.question}</h4>
                    <p>{i.answer}</p>
                </div>
            )
        })
        }
    </div>
    )
}


export default Questions;