import { FC, } from "react";

const VerticalBarSVG: FC<{ index: string, percentuale: string }> = function ({ index, percentuale }) {
    return <svg className="h-full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="350 0 120 600">
        <defs>
            <linearGradient id={`liquidGrad${index}`} x1="557" y1="150" x2="557" y2="546" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#FF0909" />
                <stop offset="0.2" stopColor="#F3481A" />
                <stop offset="0.5" stopColor="#FABA2C" />
                <stop offset="1" stopColor="#00BCF2" />
            </linearGradient>
            <rect id={`tube${index}`} x="357" y="150" width="86" height="400" rx="43" ry="43" />
            <clipPath id={`liquidMask${index}`}>
                <use xlinkHref={`#tube${index}`} className="liquidMask" />
            </clipPath>
            <clipPath id={`tubeMask${index}`}>
                <use xlinkHref={`#tube${index}`} className="liquidMask" />
            </clipPath>
            <path id={`liquid${index}`} d="M757,552v490H357V552c50,0,50,20,100,20s50-20,100-20,50,20,100,20S707,552,757,552Z" />
            <mask id={`gradMask${index}`}>

                <use xlinkHref={`#liquid${index}`} className={"li" + index} x="0" y={percentuale} fill="#FCEFD6" />
                <use xlinkHref={`#liquid${index}`} className={"li" + index} x="0" y={percentuale} fill="#EEE" opacity="0.7" />

            </mask>
        </defs>


        <g className="whole" transform="translate(0, -40)">


            <use xlinkHref={`#tube${index}`} className="tubeBg" fill="#C8D9D3" opacity="0.61" />

            <g mask={`url(#gradMask${index})`}>
                <use xlinkHref={`#tube${index}`} fill={`url(#liquidGrad${index})`} />
            </g>
            <line className="tubeShine" x1="371" y1="200" x2="371" y2="443" fill="none" stroke="#FFF" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="8" opacity="0.21" strokeDasharray="153 30" strokeDashoffset="-20" />

            <g className="measurements" fill="none" stroke="#FCEFD6" strokeWidth="3" strokeLinecap="round" opacity="1">
                <line x1="358" y1="196" x2="370" y2="196" />
                <line x1="358" y1="234" x2="370" y2="234" />
                <line x1="358" y1="273" x2="370" y2="273" />
                <line x1="358" y1="311" x2="370" y2="311" />
                <line x1="358" y1="350" x2="370" y2="350" />
                <line x1="358" y1="388" x2="370" y2="388" />
                <line x1="358" y1="426" x2="370" y2="426" />
                <line x1="358" y1="465" x2="370" y2="465" />
                <line x1="358" y1="503" x2="370" y2="503" />
            </g>
        </g>
    </svg >
}

export default VerticalBarSVG;