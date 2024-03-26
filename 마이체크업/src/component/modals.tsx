import Modal from "react-modal";
import { useMediaQuery } from "react-responsive";
import { modalStyles } from "../utils/common";
import PdfView from "./pdfView"; // PdfView 컴포넌트 import 추가
import { SetStateAction } from "react";
import Process from './process';

interface Props {
    type : string;
    open: boolean;
    setOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function Modals({ open, type, setOpen }: Props) {
    const isPc = useMediaQuery({ query: "(min-width: 990px)" });
    const styles = modalStyles('clim');

    return (
        <Modal isOpen={open} style={!isPc ? styles.mobi : styles.web}>
                {
                    type === 'pdf' &&
                    <div className='w-full'>
                        <PdfView setOpen={setOpen} type={'pdf'} pdfUrl="/insuTerms.pdf"/>
                    </div>
                }
                {
                    type === 'process' &&
                    <div className='w-full h-full'>
                        <Process setOpen={setOpen}/>
                    </div>
                }
                {
                    type === 'regi' &&
                    <div className='w-full'>
                        <PdfView setOpen={setOpen} type={'regi'} pdfUrl="/insuTerms.pdf"/>
                    </div>
                }
            </Modal>
    )
}
