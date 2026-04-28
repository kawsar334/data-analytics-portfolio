import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import hospital from "../hospital.json";
const COLORS = [
    "#3B82F6",
    "#10B981",
    "#F59E0B",
    "#EF4444",
    "#8B5CF6",
    "#06B6D4",
    "#84CC16",
    "#F97316",
    "#EC4899",
    "#6366F1",
];
const PieChartPage = () => {

    const diseaseCounts = hospital.reduce((acc, patient) => {
        acc[patient.disease] = (acc[patient.disease] || 0) + 1
        return acc;
    }, {})
    const pieInfoByGenderCounts = Object.entries(diseaseCounts).map(([disease, count]) => { return { disease, count } })
    return (
        <div  
        className='w-full  mx-auto  h-[100%] flex flex-col justify-center items-center overflow-auto  '>
            <h2 className='text-xl hidden lg:flex  my-2 text-[lightgray]'>Gender-wise Patient Count</h2>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={pieInfoByGenderCounts}
                        dataKey="count"
                        
                        cx="50%"
                        cy="50%"
                        outerRadius={135}
                        nameKey="disease"
                        label={
                            ({ disease, percent }) => `${disease} ${(percent * 100).toFixed(0)}%`
                        }
                        Legend


                    >
                        <Tooltip formatter={(value,name)=>[`${value} patients`,name]}></Tooltip>
                        {pieInfoByGenderCounts.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
};

export default PieChartPage;


// import {
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   Legend,
// } from "recharts";
// import hospital from "./hospital.json";

// const COLORS = [
//   "#3B82F6",
//   "#10B981",
//   "#F59E0B",
//   "#EF4444",
//   "#8B5CF6",
//   "#06B6D4",
//   "#84CC16",
//   "#F97316",
//   "#EC4899",
//   "#6366F1",
// ];

// const PieChartPage = () => {
//   const diseaseCounts = hospital.reduce((acc, patient) => {
//     acc[patient.disease] = (acc[patient.disease] || 0) + 1;
//     return acc;
//   }, {});

//   const pieInfoByDiseaseCounts = Object.entries(diseaseCounts).map(
//     ([disease, count]) => ({
//       disease,
//       count,
//     })
//   );

//   return (
//     <div className="w-[95%] h-[80vh] mx-auto my-24 p-5 bg-white rounded-3xl shadow-xl">
//       <h2 className="text-3xl font-bold mb-8 text-slate-800">
//         Disease-wise Patient Distribution
//       </h2>

//       <div className="w-full h-[500px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie
//               data={pieInfoByDiseaseCounts}
//               dataKey="count"
//               nameKey="disease"
//               cx="50%"
//               cy="50%"
//               outerRadius={170}
//               label={({ disease, percent }) =>
//                 `${disease} ${(percent * 100).toFixed(0)}%`
//               }
//             >
//               {pieInfoByDiseaseCounts.map((entry, index) => (
//                 <Cell
//                   key={`cell-${index}`}
//                   fill={COLORS[index % COLORS.length]}
//                 />
//               ))}
//             </Pie>

//             <Tooltip
//               formatter={(value, name) => [`${value} Patients`, name]}
//             />

//             <Legend />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default PieChartPage;