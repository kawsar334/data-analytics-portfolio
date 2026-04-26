// import React, { useEffect, useState } from "react";
// import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
// import employeejson from "./employee_info.json"
// const Dashboard = () => {
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);




//     useEffect(() => {
//         const formattedData = employeejson.slice(1).map(emp => ({
//             id: emp["1"],
//             name: emp["2"],
//             designation: emp["3"],
//             email: emp["4"],
//             joiningDate: emp["5"],
//             salary: emp["6"],
//             phone: emp["7"]
//         }));
//         setData(formattedData);
//     }, []);
//     console.log(data)

//     return (
//         <div className="p-6 bg-gray-100 min-h-screen">
//             {/*  */}
//             <div className="bg-white shadow rounded p-4 mb-6">
//                 <h2 className="text-xl font-semibold mb-4">SALARY CHART</h2>
//                 <ResponsiveContainer width="100%" height={300}>
//                     <LineChart data={data}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="name" />
//                         <YAxis />
//                         <Tooltip />
//                         <Line type="monotone" dataKey="salary" stroke="#4F46E5" strokeWidth={2} />
//                     </LineChart>
//                 </ResponsiveContainer>
//             </div>

//             {/*  */}
//             <div className="w-screen flex justify-center items-center my-5   ">
//                 <table className="  p-4   ">
//                     <tr className="p-2">
//                         <th className="text-left border p-1 uppercase text-2xl text-blue-600">id</th>
//                         <th className="text-left border p-1 uppercase text-2xl text-blue-600">name</th>
//                         <th className="text-left border p-1 uppercase text-2xl text-blue-600">email</th>
//                         <th className="text-left border p-1 uppercase text-2xl text-blue-600">phone</th>
//                         <th className="text-left border p-1 uppercase text-2xl text-blue-600">joining Date</th>
//                         <th className="text-left border p-1 uppercase text-2xl text-blue-600">salary</th>
//                         <th className="text-left border p-1 uppercase text-2xl text-blue-600">action</th>
//                     </tr>
//                     {data && data?.map((item, idx) => (
//                         <tr className={`${idx % 2 == 0 ? "bg-gray-200 hover:bg-transparent" : "bg-transparent hover:bg-gray-100"} p-3`}>
//                             <td className={`text-left border p-2 `}>{item?.id || "Not Found"}</td>
//                             <td className={`text-left border p-2 `}>{item?.name || "Not Found"}</td>
//                             <td className={`text-left border p-2 `}>{item?.email.split(" ").join("") || "Not Found"}</td>
//                             <td className={`text-left border p-2 `}>{item?.phone || "Not Found"}</td>
//                             <td className={`text-left border p-2 `}>{item?.joiningDate || "Not Found"}</td>
//                             <td className={`text-left border p-2 `}>{item?.salary || "Not Found"}</td>
//                         <td className="text-left border p-1  ">
//                                 <button className="border  border-amber-200  px-2 py-1 w-full bg-green-600 cursor-pointer rounded-full text-white font-medium">More </button>
//                         </td>

//                         </tr>
//                     ))}
//                 </table>
//             </div>
//             {/*  */}
//         </div>
//     );
// };

// export default Dashboard;


import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie
} from "recharts";
import employeejson from "./employee_info.json";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // Format timestamp → readable date
  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    return new Date(timestamp).toLocaleDateString();
  };

  useEffect(() => {
    const formattedData = employeejson.slice(1).map((emp) => ({
      id: emp["1"],
      name: emp["2"],
      designation: emp["3"],
      email: emp["4"]?.replace(/\s/g, ""),
      joiningDate: emp["5"],
      salary: emp["6"],
      phone: emp["7"]
    }));

    setEmployees(formattedData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-8">
<div className="bg-white shadow-lg rounded-xl p-6">
  <h2 className="text-lg font-semibold text-gray-700 mb-4">
    Salary Distribution
  </h2>

  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie
        data={employees}
        dataKey="salary"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
</div>
      {/* Chart Section */}
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Employee Salary Chart
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={employees}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="salary"
              stroke="#4F46E5"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Table Section */}

      <div className="w-screen">

  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={employees}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="salary" fill="#10B981" radius={[6,6,0,0]} />
    </BarChart>
  </ResponsiveContainer>
</div>
            <div className="bg-white shadow-lg rounded-xl p-6">
  <h2 className="text-lg font-semibold text-gray-700 mb-4">
    Salary Comparison
  </h2>

</div>
      <div className="bg-white shadow-lg rounded-xl overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          
          <thead className="bg-gray-50 border-b">
            <tr className="text-gray-700 uppercase text-xs">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Joining Date</th>
              <th className="px-4 py-3">Salary</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {/*  */}
            {/*  */}
            {employees.map((emp, index) => (
              <tr
                key={emp.id || index}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3">{emp.id || "N/A"}</td>
                <td className="px-4 py-3 font-medium">{emp.name || "N/A"}</td>
                <td className="px-4 py-3">{emp.email || "N/A"}</td>
                <td className="px-4 py-3">{emp.phone || "N/A"}</td>
                <td className="px-4 py-3">{formatDate(emp.joiningDate)}</td>
                <td className="px-4 py-3 font-semibold text-indigo-600">
                  ৳ {emp.salary}
                </td>
                <td className="px-4 py-3 text-center">
                  <button className="px-4 py-1.5 text-sm bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

    </div>
  );
};

export default Dashboard;