import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import hospital from "./hospital.json";
const HospitalDashboard = () => {
  const data = hospital;
  const processedData = useMemo(() => {
    const deptRevenue = {};
    const diseaseCosts = {};
    const monthlyRev = {};

    data.forEach(item => {

      deptRevenue[item.department] = (deptRevenue[item.department] || 0) + item.treatment_cost_usd;


      if (!diseaseCosts[item.disease]) {
        diseaseCosts[item.disease] = { total: 0, count: 0 };
      }
      diseaseCosts[item.disease].total += item.treatment_cost_usd;
      diseaseCosts[item.disease].count += 1;


      monthlyRev[item.month] = (monthlyRev[item.month] || 0) + item.treatment_cost_usd;
    });
    console.log(deptRevenue)

    const barData = Object.keys(deptRevenue).map(key => ({ name: key, revenue: deptRevenue[key] }));
    const avgCostData = Object.keys(diseaseCosts).map(key => ({
      name: key,
      avgCost: Math.round(diseaseCosts[key].total / diseaseCosts[key].count)
    }));
    const lineData = Object.keys(monthlyRev)
      .map(key => ({ month: `Month ${key}`, revenue: monthlyRev[key] }))
      .sort((a, b) => parseInt(a.month.split(' ')[1]) - parseInt(b.month.split(' ')[1]));

    return { barData, avgCostData, lineData };
  }, [data]);

  return (
    <div className='py-6 ' style={{  fontFamily: 'Arial' }}>
      
      <div style={{ marginBottom: '50px' }}>
        <h3 className='text-[lightgray] text-2xl'>Total Revenue by Department</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={processedData.barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            {/* <YAxis /> */}
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" name="Total Revenue ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>


      <div  className='my-10 w-full '>
        <h3 className='text-[lightgray] text-2xl my-2'>Average Cost per Disease</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={processedData.avgCostData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" width={100} />
            <Tooltip />
            <Bar dataKey="avgCost" fill="#82ca9d" name="Avg Cost ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ marginBottom: '50px' }}>
        <h3>Monthly Revenue Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={processedData.lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" strokeWidth={2} name="Monthly Income" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default HospitalDashboard;
