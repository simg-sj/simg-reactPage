import Header from '../components/header';
import Footer from '../components/footer';
import Section from "../components/section";
import ProductWrap from "../components/productWrap";
import React, {useEffect, useRef, useState} from "react";
import Modals from "../components/modals/modal";

export default function Home(){
    const [isOpen, setIsOpen] = useState(false);
    const registerRef = useRef(null);
    const infoRef = useRef(null);
    const limitRef = useRef(null);
    const qaRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <div>
            <Header registRef={registerRef} infoRef={infoRef} limitRef={limitRef} qaRef={qaRef}/>
            <ProductWrap/>
            <Section registerRef={registerRef} infoRef={infoRef} limitRef={limitRef} qaRef={qaRef} setIsOpen={setIsOpen}/>
            <Footer/>
            {isOpen && <Modals isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
    )
}
