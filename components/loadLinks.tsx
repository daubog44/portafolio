import { v4 as uuidv4 } from 'uuid';
import Script from "next/script";
import useStore from '../store/store';
import { FC, useState } from 'react';


const LoadLinks: FC<{ links: string[] }> = function ({ links }) {
    const [isOnLoad, setIsOnLoad] = useState<boolean[]>(new Array(links.length).fill(false));
    const setHasLoadedScripts = useStore(stroe => stroe.setHasLoadedScripts);

    return (
        <>
            {links.map((src, i) => {
                const key = uuidv4();
                return (
                    <Script key={key} src={src} onLoad={() => {
                        setIsOnLoad(prev => { prev[i] = true; return prev });
                        const loaded = isOnLoad.filter(Boolean);
                        if (loaded.length === isOnLoad.length) {
                            setHasLoadedScripts();
                        }
                    }} />
                )
            })}
        </>
    )
}

export default LoadLinks;