import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import hospital from "./hospital.json";
import PieChartPage from "./PieChart"


// Bar Chart
// Line Chart
// Pie Chart
// Histogram
// Area Chart
// Scatter Plot
// Stacked Bar Chart
// Composed Chart

const ChartPage = () => {
    const diseaseCounts = hospital.reduce((acc, patient) => {
        acc[patient.disease] = (acc[patient.disease] || 0) + 1;
        return acc;
    }, {})
    const diseasInfoForBrChart = Object.entries(diseaseCounts).map(([disease, count]) => { return { disease, count } })

    return (
        <div className='w-[100vw]  min-h-[80vh] md:h-[80vh] gap-2 mx-auto   flex justify-center items-center  overflow-scroll md:overflow-auto p-2  flex-col lg:flex-row' id='analytics'>
            <div className='w-full md:w-[80%] h-full shadow rounded-2xl flex justify-start items-start flex-col ' >
                <h2 className='text-xl  p-2    text-center text-[lightgray]'>Disease-wise Patient Count</h2>
                <ResponsiveContainer width="100%" height="90%">
                    <BarChart data={diseasInfoForBrChart} layout='horizontal'>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="disease" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" name="Patients" radius={[10, 10, 0, 0]} fill='#9538e2' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className=' w-full md:w-[40%] h-[500px] md:h-full  flex flex-col  shadow rounded-2xl'>
                <PieChartPage />

            </div>
        </div>
    )
};

export default ChartPage;
