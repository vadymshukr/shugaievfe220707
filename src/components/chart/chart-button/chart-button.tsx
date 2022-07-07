import {Button} from "./chart-button-styled";
import React from "react";

type Props = {
    onClick: () => void
}

export const ChartButton = React.forwardRef<HTMLButtonElement, Props>(({onClick}, ref) => {
    return <Button onClick={onClick} ref={ref}>Randomize Chart</Button>
});