
import employee_data from '../components/employee_data.json';

const Dashboard = () => {
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-6">
      <div className="max-w-7xl mx-auto   rounded-2xl shadow-lg ">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Employee Management Dashboard
        </h1>

        <div className="overflow-x-scroll "> 
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="border border-gray-300 p-3">EMP ID</th>
                <th className="border border-gray-300 p-3">EMP NAME</th>
                <th className="border border-gray-300 p-3">DESIGNATION</th>
                <th className="border border-gray-300 p-3">EMAIL</th>
                <th className="border border-gray-300 p-3">PHONE</th>
                <th className="border border-gray-300 p-3">COMPANY</th>
                <th className="border border-gray-300 p-3">JOINING DATE</th>
                <th className="border border-gray-300 p-3">PER DAY SALARY</th>
                <th className="border border-gray-300 p-3">PER MONTH SALARY</th>
              </tr>
            </thead>

            <tbody>
              {employee_data.map((employee, index) => (
                <tr
                  key={index}
                  className="text-center hover:bg-gray-100 transition"
                >
                  <td className="border border-gray-300 p-3">{employee['EMP ID']}</td>
                  <td className="border border-gray-300 p-3 font-semibold">{employee['EMP NAME']}</td>
                  <td className="border border-gray-300 p-3">{employee.DESIGNATION}</td>
                  <td className="border border-gray-300 p-3">{employee.Email}</td>
                  <td className="border border-gray-300 p-3">{employee.Phone}</td>
                  <td className="border border-gray-300 p-3">{employee.Company}</td>
                  <td className="border border-gray-300 p-3">{formatDate(employee['Joining Date'])}</td>
                  <td className="border border-gray-300 p-3 text-green-600 font-medium">
                    ৳{employee['PER DAY Salary']}
                  </td>
                  <td className="border border-gray-300 p-3 text-blue-600 font-bold">
                    ৳{employee.PER_MONTH_SALARY}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;