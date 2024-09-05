import { useState } from 'react'
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion"

export const Faqs = () => {
    const [answer, setAnswer] = useState<number | "">("");

    const accordionData = [
        {
            question: "How do I apply for admission?",
            id: 1,
            answer:
                "You can apply for admission by filling out our online application form on our website. After submitting the form, our admissions team will review it and contact you for the next steps, including a campus tour and interview.",
        },
        {
            question: "What is an A Level?",
            id: 2,
            answer:
                "The Cambridge Advanced Level (A Level) is a globally recognized qualification offered by Cambridge Assessment International Education. It is typically studied over two years and is considered equivalent to the final year of high school or pre-university education.",
        },
        {
            question: "Is the school Cambridge certified?",
            id: 3,
            answer:
                "Yes, our school is Cambridge certified. We follow the Cambridge International curriculum, which provides a high-quality educational framework that is recognized globally.",
        },
        {
            question: "What are the benefits of attending a Cambridge certified school?",
            id: 4,
            answer:
                "Attending a Cambridge certified school offers numerous benefits including an internationally recognized curriculum, a focus on critical thinking and problem-solving skills, and the opportunity to earn globally recognized qualifications such as IGCSEs and A Levels.",
        },
    ];

    const handleClick = (id: number) => {
        setAnswer((prevAnswer) => (prevAnswer === id ? "" : id));
    };

    return (
        <div className='bg-black w-screen h-screen flex justify-center flex-col text-white items-center hero-faq'>
            <div className='text-[2vw] tracking-[2px] font-sans mb-2'>FAQS</div>
            <div className='bg-white h-[60%] w-[70%] rounded-[7px] shadow-lg text-black'>
                <div className='w-[80%] flex flex-col justify-center mx-auto h-full'>
                    {accordionData.map((item) => (
                        <div key={item.id} className='flex flex-col justify-between'>
                            <div className='flex items-center justify-between'>
                                <div className='py-4'>
                                    <h2 className='font-bold text-[1.3vw]'>{item.question}</h2>
                                </div>
                                <div className='cursor-pointer' onClick={() => handleClick(item.id)}>
                                    {answer === item.id ? <FaCircleMinus className='text-red-400' /> : <FaCirclePlus />}
                                </div>
                            </div>
                            <AnimatePresence>
                                {answer === item.id && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: '4rem' }}
                                        transition={{ duration: 0.5 }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className='relative block'>
                                        <div className='absolute text-[1vw]'>{item.answer}</div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
