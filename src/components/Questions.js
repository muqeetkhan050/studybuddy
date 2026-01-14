

import React, { useState } from 'react';

const Questions = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "How do I create an account?",
            answer: "To create an account, click on the 'Sign Up' button at the top right corner and fill in the required details."
        },
        {
            question: "Is there a mobile app available?",
            answer: "Yes, Study Buddy is available on both iOS and Android platforms. You can download it from the respective app stores."
        },
        {
            question: "Can I customize my study plan?",
            answer: "Absolutely! Our platform allows you to tailor your study plans according to your preferences and goals."
        },
        {
            question: "What kind of help is available?",
            answer: "We offer a wide range of help including Notes, Timer, Plan schedule, and interactive exercises curated by our AI."
        }
    ];

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div style={styles.container}>
            <h3 style={styles.title}>Frequently Asked Questions</h3>
            <div style={styles.faqList}>
                {faqData.map((item, index) => (
                    <div key={index} style={styles.faqItem}>
                        <div 
                            style={styles.questionHeader} 
                            onClick={() => toggleQuestion(index)}
                        >
                            <h4 style={styles.question}>{item.question}</h4>
                            <span style={styles.icon}>
                                {openIndex === index ? '−' : '+'}
                            </span>
                        </div>
                        {openIndex === index && (
                            <p style={styles.answer}>{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '40px auto',
        padding: '20px',
    },
    title: {
        fontSize: '32px',
        fontWeight: '700',
        color: '#2c3e50',
        textAlign: 'center',
        marginBottom: '30px',
    },
    faqList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    faqItem: {
        backgroundColor: 'white',
        border: '2px solid #2c3e50',
        borderRadius: '12px',
        padding: '20px',
        transition: 'all 0.3s ease',
    },
    questionHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        userSelect: 'none',
    },
    question: {
        fontSize: '18px',
        fontWeight: '600',
        color: '#2c3e50',
        margin: 0,
        flex: 1,
    },
    icon: {
        fontSize: '28px',
        fontWeight: '300',
        color: '#7cb342',
        width: '32px',
        height: '32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    answer: {
        fontSize: '15px',
        color: '#666',
        lineHeight: '1.6',
        marginTop: '16px',
        marginBottom: 0,
        paddingTop: '16px',
        borderTop: '1px solid #e0e0e0',
    },
};

export default Questions;