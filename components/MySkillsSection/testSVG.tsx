import { FC } from "react";

const TestSVG: FC<{ percentuale: string }> = function ({ percentuale }) {
    console.log(percentuale);
    return <div>{percentuale}</div>
}

export default TestSVG;