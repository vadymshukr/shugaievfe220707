import {ChartService} from "../../chart-service/chart-service";
import {createContext, Dispatch, FC, ReactNode, SetStateAction, useState} from "react";

type ChartData = {
    name: string,
    time: number
}

type ChartContextType = {
    value: ChartData[],
    randomize:  () => void
}

type Props ={
    children: ReactNode
}

const {getInitialChartData, randomizeChartData} = new ChartService()

const ChartContextInitialValue: ChartContextType = {
    value: [] as ChartData[],
    randomize: () => {}
}

export const ChartContext = createContext<ChartContextType>(ChartContextInitialValue)

export const ChartContextProvider: FC<Props> = ({children}) => {
    const [value, setValue] = useState<ChartData[]>(getInitialChartData())
    const randomize = () => {
        setValue(randomizeChartData())
    }

    return <ChartContext.Provider value={{value, randomize}} >
        {children}
    </ChartContext.Provider>
}