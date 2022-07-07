import React, {useContext, useEffect, useMemo, useRef} from 'react'
import {ChartContext} from "./chart-service-context";
import {ChartWrapper} from "./chart-styled";
import {ChartBar} from "./chartbar/chartbar";
import {ChartButton} from "./chart-button/chart-button";
import {Title} from "./chart-button/chart-button-styled";


export const Chart = () => {
    const { value, randomize } = useContext(ChartContext)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        if (buttonRef.current) {
            const interval = setInterval(() => {
                (buttonRef.current as HTMLButtonElement).click()
            }, 30000);
            return () => {
                clearInterval(interval)
            }
        }

    }, [])

    const onClick = () => {
        randomize();
        (buttonRef.current! as HTMLButtonElement).disabled = true
        setTimeout(() => {
            (buttonRef.current! as HTMLButtonElement).disabled = false
        }, 2000)
    }


    const total = useMemo(() => {
        return value.reduce((acc, item) => acc += item.time, 0)
    }, [value])

    const chartData = value.map((chartbar, index, array )=> {
        const width = chartbar.time / total * 100;
        const prevArrLength = array.slice(0, index).reduce((acc, val) => acc+=val.time, 0)
        const start = index === 0 ? 0 : prevArrLength/ total * 100 + 0.1
        return {
            name: chartbar.name,
            time: chartbar.time,
            start: start,
            width: width
        }
    })

    return (
        <ChartWrapper>
            <Title>Spent Time (Seconds)</Title>
            {
                chartData.map((chartbar, index, array) => {
                    const {name, time, width, start} = chartbar
                    return <ChartBar key={name} name={name} time={time} width={width} start={start}/>
                })
            }

            <ChartButton ref={buttonRef} onClick={onClick}/>
        </ChartWrapper>
    )
}