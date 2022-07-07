type ChartData = {
    name: string,
    time: number
}

interface IChartService {
    getInitialChartData: () => ChartData[]
    randomizeChartData: () => ChartData[]
}

export class ChartService implements IChartService{
    initialChartData: ChartData[]
    constructor() {
        this.initialChartData =  [
            {name: 'Landing Page', time: 7.4},
            {name: 'Configurator', time: 0.2},
            {name: 'Check-out', time: 7},
            {name: 'Deal', time: 3.8}
        ]

        this.getInitialChartData = this.getInitialChartData.bind(this)
        this.randomizeChartData = this.randomizeChartData.bind(this)

    }

    getInitialChartData() {
        return this.initialChartData
    }

    randomizeChartData() {
        return this.initialChartData.map(data => {
            return {...data, time: Number((Math.random() * (10 - 0.1) + 0.1).toFixed(1))}
        })
    }
}