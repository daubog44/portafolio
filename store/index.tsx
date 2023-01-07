import create from 'zustand'
import { type CardProp } from '../components/MySkillsSection/technologiesData';
import cardData from "../components/MySkillsSection/technologiesData";

interface Store {
    CardData: CardProp[],
    hasLoadedScripts: boolean,
    setHasLoadedScripts: () => void,
    pushToCardData: (data: CardProp) => void,
    removeFromData: (data: CardProp) => void,
}

function pushUnique(dataToPush: CardProp, data: CardProp[]): CardProp[] {
    return Array.from(new Set([...data, dataToPush]));
}

const useStore = create<Store>((set) => ({
    CardData: cardData,
    hasLoadedScripts: false,
    setHasLoadedScripts: () => set({ hasLoadedScripts: true }),
    pushToCardData: (data: CardProp) => set(st => ({ CardData: pushUnique(data, st.CardData) })),
    removeFromData: (data: CardProp) => set(st => ({ CardData: st.CardData.filter(card => card.description !== data.description) })),
}));
export default useStore;