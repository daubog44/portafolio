import { addOne } from "@c/omponents/MySkillsSection/technologiesData";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import useStore from "../store";

const useCardData = () => {
    const matches = useMediaQuery("(min-width: 1280px)");
    const [cardData, pushToCardData, removeFromData] = useStore(st => [st.CardData, st.pushToCardData, st.removeFromData]);


    useEffect(() => {
        if (matches) {
            pushToCardData(addOne);
        } else {
            removeFromData(addOne);
        }
    }, [matches]);

    return cardData;
}

export default useCardData;