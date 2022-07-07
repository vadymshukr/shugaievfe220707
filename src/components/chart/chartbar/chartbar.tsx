import React from 'react'
import {
    ChartBarLabel,
    ChartBarProgress,
    ChartBarProgressTime,
    ChartBarProgressWrapper,
    ChartBarWrapper
} from "./chartbar-styled";


type Props = {
    name: string
    time: number
    width: number
    start: number
}

export const ChartBar = ({name, time, width, start}: Props) => {
    return (
        <ChartBarWrapper>
            <ChartBarLabel>{name}</ChartBarLabel>
            <ChartBarProgressWrapper>
                <ChartBarProgress start={start} width={width} style={{
                    left: `${start}%`,
                    width: `${width}%`
                }}>
                    <ChartBarProgressTime>{time}</ChartBarProgressTime>
                </ChartBarProgress>
            </ChartBarProgressWrapper>
        </ChartBarWrapper>
    )
}