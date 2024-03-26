import AgreeAll from "../atoms/agreeButtons/agreeAll";
import AgreeButton from "../atoms/agreeButtons/agreeButton";
import ConsntButton from "../atoms/agreeButtons/consntButton";
import OfferButton from "../atoms/agreeButtons/offerButton";
import SearchAbout from "../atoms/agreeButtons/searchAbout";
import FooterGrop from "./footerGroup";
import React, {useEffect, useState} from "react";
import {InfoProps} from "../atoms/inputs/carNumInput";

const AgreeButtonGroup = (props : {info : InfoProps, setInfo : React.Dispatch<React.SetStateAction<InfoProps>>} ) => {
    const [all ,setAll] = useState <boolean>(false);
    const [consnt ,setConsnt] = useState <boolean>(false);
    const [offer ,setOffer] = useState <boolean>(false);
    const [search ,setSearch] = useState <boolean>(false);
    const [agree ,setAgree] = useState <boolean>(false);

    useEffect(() => {
        if(all) {
            setConsnt(true);
            setOffer(true);
            setSearch(true);
            setAgree(true);
        }
        if(!all){
            setAgree(false);
            setConsnt(false);
            setOffer(false);
            setSearch(false);
        }
        props.setInfo((prevState) => {
            return {
                ...prevState,
                cCheck : all
            }
        });
    }, [all, consnt,offer,search,agree]);
    return(
        <div className='w-full px-4  pb-6'>
            <AgreeAll all={all} setAll={setAll}/>
            <ConsntButton consnt={consnt} setConsnt={setConsnt}/>
            <SearchAbout search={search} setSearch={setSearch}/>
            <OfferButton offer={offer} setOffer={setOffer}/>
            <AgreeButton agree={agree} setAgree={setAgree}/>
        </div>
    )
}
export default AgreeButtonGroup;