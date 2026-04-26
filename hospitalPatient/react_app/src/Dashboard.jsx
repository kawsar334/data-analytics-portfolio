



// import { useEffect, useMemo, useState } from "react";
// import hospital from "./hospital.json";
// import Popup from "./components/Popup";

// const Dashboard = () => {
//   const [data, setData] = useState({});
//   const [openModal, setOpenModal] = useState(false);

//   // filter states
//   const [selectedDepartment, setSelectedDepartment] = useState("");
//   const [selectedGender, setSelectedGender] = useState("");
//   const [selectedDisease, setSelectedDisease] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [searchTerm, setSearchTerm] = useState("");

//   // pagination
//   const [currentPage, setCurrentPage] = useState(1);
//   const dataPerPage = 50;

//   // unique values for filter dropdowns
//   const uniqueDepartments = [...new Set(hospital.map((item) => item.department))];
//   const gender = [...new Set(hospital.map((item) => item.gender))];
//   const disease = [...new Set(hospital.map((item) => item.disease))];

//   const handlePopup = (item) => {
//     setData(item);
//     setOpenModal(true);
//   };

//   // filtered + searched + sorted data
//   const filteredData = useMemo(() => {
//     let filtered = [...hospital];

//     // department filter
//     if (selectedDepartment) {
//       filtered = filtered.filter(
//         (item) => item.department === selectedDepartment
//       );
//     }

//     // gender filter
//     if (selectedGender) {
//       filtered = filtered.filter((item) => item.gender === selectedGender);
//     }

//     // disease filter
//     if (selectedDisease) {
//       filtered = filtered.filter((item) => item.disease === selectedDisease);
//     }

//     // search filter
//     if (searchTerm.trim()) {
//       filtered = filtered.filter((item) =>
//         item.patient_id
//           .toString()
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase())
//       );
//     }

//     // sorting by treatment cost
//     filtered.sort((a, b) => {
//       if (sortOrder === "asc") {
//         return a.treatment_cost_usd - b.treatment_cost_usd;
//       }
//       return b.treatment_cost_usd - a.treatment_cost_usd;
//     });

//     return filtered;
//   }, [
//     selectedDepartment,
//     selectedGender,
//     selectedDisease,
//     searchTerm,
//     sortOrder,
//   ]);

//   // reset page when filter changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [
//     selectedDepartment,
//     selectedGender,
//     selectedDisease,
//     searchTerm,
//     sortOrder,
//   ]);

//   // pagination after filtering
//   const totalPage = Math.ceil(filteredData.length / dataPerPage);
//   const indexOfLastData = currentPage * dataPerPage;
//   const indexOfFirstData = indexOfLastData - dataPerPage;
//   const hospitalData = filteredData.slice(indexOfFirstData, indexOfLastData);

//   return (
//     <div className="p-6 bg-[#2c3e50] min-h-screen overflow-x-scroll" id="tables">
//       <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="px-6 py-4 border-b border-gray-200 bg-indigo-600">
//           <h2 className="text-xl font-semibold text-white">
//             Hospital Patient Records
//           </h2>
//         </div>

//         {openModal && (
//           <Popup
//             data={data}
//             openModal={openModal}
//             setOpenModal={setOpenModal}
//           />
//         )}

//         {/* Filter Section */}
//         <div className="bg-gray-900 text-white flex justify-start gap-3 items-center p-2 flex-wrap">
//           <h2 className="text-2xl text-[lightgray] font-bold">Filter by:</h2>

//           {/* Department */}
//           <select
//             value={selectedDepartment}
//             onChange={(e) => setSelectedDepartment(e.target.value)}
//             className="bg-[rgba(0,0,0,0.5)] p-2 rounded border"
//           >
//             <option value="">Departments</option>
//             {uniqueDepartments.map((dep, i) => (
//               <option value={dep} key={i}>
//                 {dep}
//               </option>
//             ))}
//           </select>

//           {/* Gender */}
//           <select
//             value={selectedGender}
//             onChange={(e) => setSelectedGender(e.target.value)}
//             className="bg-[rgba(0,0,0,0.5)] p-2 rounded border"
//           >
//             <option value="">Gender</option>
//             {gender.map((g, i) => (
//               <option value={g} key={i}>
//                 {g}
//               </option>
//             ))}
//           </select>

//           {/* Disease */}
//           <select
//             value={selectedDisease}
//             onChange={(e) => setSelectedDisease(e.target.value)}
//             className="bg-[rgba(0,0,0,0.5)] p-2 rounded border"
//           >
//             <option value="">Disease</option>
//             {disease.map((d, i) => (
//               <option value={d} key={i}>
//                 {d}
//               </option>
//             ))}
//           </select>

//           {/* Sort */}
//           <select
//             value={sortOrder}
//             onChange={(e) => setSortOrder(e.target.value)}
//             className="bg-[rgba(0,0,0,0.5)] p-2 rounded border"
//           >
//             <option value="asc">Cost: Low to High</option>
//             <option value="desc">Cost: High to Low</option>
//           </select>

//           {/* Search */}
//           <input
//             type="text"
//             placeholder="Search Patient ID..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="bg-[rgba(0,0,0,0.5)] p-2 px-5 rounded text-white outline-0 border"
//           />

//           {/* Reset Filters */}
//           <button
//             onClick={() => {
//               setSelectedDepartment("");
//               setSelectedGender("");
//               setSelectedDisease("");
//               setSortOrder("asc");
//               setSearchTerm("");
//             }}
//             className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
//           >
//             Reset
//           </button>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
//               <tr>
//                 <th className="px-6 py-3 border-b">ID</th>
//                 <th className="px-6 py-3 border-b">Age/Gender</th>
//                 <th className="px-6 py-3 border-b">Disease</th>
//                 <th className="px-6 py-3 border-b">Department</th>
//                 <th className="px-6 py-3 border-b">Stay (Days)</th>
//                 <th className="px-6 py-3 border-b text-right">Cost (USD)</th>
//               </tr>
//             </thead>

//             <tbody className="text-gray-600 text-sm">
//               {hospitalData.map((item, index) => (
//                 <tr
//                   key={index}
//                   className="hover:bg-gray-50 border-b border-gray-100 transition-colors cursor-pointer"
//                   onClick={() => handlePopup(item)}
//                 >
//                   <td className="px-6 py-4 font-medium text-gray-900 flex justify-start items-center gap-4">
//                     <div
//                       className={`w-3 h-3 rounded-full ${
//                         index % 2 === 0 ? "bg-[#9538e2]" : "bg-red-500"
//                       }`}
//                     ></div>
//                     {item.patient_id}
//                   </td>

//                   <td className="px-6 py-4">
//                     {item.age} yrs /
//                     <span className="text-xs font-bold uppercase">
//                       {item.gender}
//                     </span>
//                   </td>

//                   <td className="px-6 py-4">
//                     <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
//                       {item.disease}
//                     </span>
//                   </td>

//                   <td className="px-6 py-4">{item.department}</td>
//                   <td className="px-6 py-4">{item.stay_days} Days</td>
//                   <td className="px-6 py-4 text-right font-semibold text-green-600">
//                     ${item.treatment_cost_usd.toLocaleString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Pagination */}
//       <div className="bg-blue-700 block h-20 p-2 rounded-2xl text-center text-white font-semibold mt-4">
//         <button
//           className="border border-gray-100 px-5 mr-5 py-1 rounded-2xl disabled:opacity-50"
//           disabled={currentPage === 1}
//           onClick={() => setCurrentPage((prev) => prev - 1)}
//         >
//           Prev
//         </button>

//         <span className="mx-4">
//           Page {currentPage} of {totalPage}
//         </span>

//         <button
//           className="border border-gray-100 px-5 py-1 rounded-2xl disabled:opacity-50"
//           disabled={currentPage === totalPage}
//           onClick={() => setCurrentPage((prev) => prev + 1)}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import { useEffect, useState } from "react";
// import hospital from "./hospital.json";
// import Popup from "./components/Popup";

// const Dashboard = () => {
//   const [data, setData] = useState({});
//   const [openModal, setOpenModal] = useState(false)
//   const [currentPage, setCurrentPage] = useState(1);
//   const dataPerPage = 50;
//   const indexOfLastData = currentPage * dataPerPage
//   const indexOfFirstData = indexOfLastData - dataPerPage;
//   const currentData = hospital.slice(indexOfFirstData, indexOfLastData)
//   const totalPage = Math.ceil(hospital.length / dataPerPage);
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
//   const [hospitalData, setHospitalData] = useState(currentData);

//   // for filter
//   const uniqueDepartments = [...new Set(hospital.map(item => item.department))];
//   const gender = [...new Set(hospital.map(item => item.gender))]
//   const disease = [...new Set(hospital.map(item => item.disease))]
//   // filter states
//   const [selectedDepartment, setSelectedDepartment] = useState("");
//   const [selectedGender, setSelectedGender] = useState("");
//   const [selectedDisease, setSelectedDisease] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");
//   const [searchTerm, setSearchTerm] = useState("");

//   const handlePopup = (i) => {
//     setData(i);
//     setOpenModal(true);
//   }

//   useEffect(() => {
//     setHospitalData(currentData)
//   }, [currentData])


//   const handleDepartment = (dep) => {
//     setSelectedDepartment(dep);
//     const filtered = hospital.filter(item => item.department == dep);
//     setHospitalData(filtered);
//   }

//   return (
//     <div className="p-6 bg-[#2c3e50] min-h-screen  overflow-x-scroll" id="tables">
//       <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
//         <div className="px-6 py-4 border-b border-gray-200 bg-indigo-600">
//           <h2 className="text-xl font-semibold text-white">Hospital Patient Records</h2>
//         </div>
//         {/* modal popup ==== */}
//         {openModal && <Popup data={data} openModal={openModal} setOpenModal={setOpenModal} />}
//         {/* modal popup ==== */}

//         {/* filter section  */}
//         <div className="bg-gray-900  text-white flex justify-start gap-3 items-center  p-2 flex-wrap ">
//           <h2 className="text-2xl text-[ligthgray] font-bold ">Filter by:</h2>
//           <div className="bg-[rgba(0,0,0,0.5)] rounded  p-1 border  ">
//             <div className="">
//               <select className="bg-[rgba(0,0,0,0.5)] p-2 rounded ">
//                 <option value="" className="text-white" >Departments</option>
//                 {uniqueDepartments.map((dep, i) => (
//                   <option className="text-white" value={dep} key={i} onClick={() => handleDepartment(dep)} >{dep}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <div className="bg-[rgba(0,0,0,0.5)] rounded  p-1 border  ">
//             <div className="">
//               <select className="bg-[rgba(0,0,0,0.5)] p-2 rounded ">
//                 <option value="" className="text-white" >Gender</option>
//                 {gender.map((g, i) => (
//                   <option className="text-white" value={g} key={i} >{g}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <div className="bg-[rgba(0,0,0,0.5)] rounded  p-1 border  ">
//             <div className="">
//               <select className="bg-[rgba(0,0,0,0.5)] p-2 rounded ">
//                 <option value="" className="text-white" >Disease</option>
//                 {disease.map((d, i) => (
//                   <option className="text-white" value={d} key={i} >{d}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
//           <div className="bg-[rgba(0,0,0,0.5)] rounded  p-1 border  ">
//             <div className="">
//               <select className="bg-[rgba(0,0,0,0.5)] p-2 rounded ">
//                 <option value="asc" className="text-white" >Ascending</option>
//                 <option value="desc" className="text-white" >Descending</option>
//               </select>
//             </div>
//           </div>

//           <div className="bg-[rgba(0,0,0,0.5)] rounded  p-1 border  ">
//             <div className="">
//               <input type="text" placeholder="Search..." className="bg-[rgba(0,0,0,0.5)] p-2  px-5 rounded text-white outline-0" />
//             </div>
//           </div>
//           <div className="bg-[rgba(0,0,0,0.5)] rounded  p-1 border  ">
//             <div className="">
//               <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white cursor-pointer" >Reset</button>
//             </div>
//           </div>
//         </div>
//         {/* filter section  */}

//         <div className="overflow-x-auto">
//           <table className="w-full text-left border-collapse">
//             <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
//               <tr className="cursor-pointer not-first-of-type:">
//                 <th className="px-6 py-3 border-b">ID</th>
//                 <th className="px-6 py-3 border-b">Age/Gender</th>
//                 <th className="px-6 py-3 border-b">Disease</th>
//                 <th className="px-6 py-3 border-b">Department</th>
//                 <th className="px-6 py-3 border-b">Stay (Days)</th>
//                 <th className="px-6 py-3 border-b text-right">Cost (USD)</th>
//               </tr>
//             </thead>
//             <tbody className="text-gray-600 text-sm">
//               {hospitalData?.map((item, index) => (
//                 <tr key={index} className="hover:bg-gray-50 border-b border-gray-100 transition-colors cursor-pointer" onClick={() => handlePopup(item)}>
//                   <td className="px-6 py-4 font-medium text-gray-900 flex justify-start items-center gap-4"><div className={`w-3 h-3 rounded-full ${index % 2 === 0 ? "bg-[#9538e2]" : "bg-red-500"}`}></div>{item.patient_id}</td>
//                   <td className="px-6 py-4">
//                     {item.age} yrs / <span className="text-xs font-bold uppercase">{item.gender}</span>
//                   </td>
//                   <td className="px-6 py-4" >
//                     <span
//                       //  className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
//                       className={`px-2 py-1 rounded-full text-xs font-semibold ${item.disease === "Diabetes"
//                           ? "bg-red-100 text-red-700"
//                           : item.disease === "Hypertension"
//                             ? "bg-yellow-100 text-yellow-700"
//                             : item.disease === "Kidney Disease"
//                               ? "bg-green-100 text-green-700"
//                               : item.disease === "Cancer"
//                                 ? "bg-purple-100 text-purple-700"
//                                 : item.disease === "Pregnancy"
//                                   ? "bg-sky-100 text-sky-700"
//                                   : item.disease === "Asthma"
//                                     ? "bg-pink-100 text-pink-700"
//                                     : item.disease === "COVID-19"
//                                       ? "bg-orange-100 text-orange-700"
//                                       : item.disease === "Pneumonia"
//                                         ? "bg-indigo-100 text-indigo-700"
//                                         : "bg-gray-100 text-gray-700"
//                         }`}
//                     >
//                       {item.disease}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4">{item.department}</td>
//                   <td className="px-6 py-4">{item.stay_days} Days</td>
//                   <td className="px-6 py-4 text-right font-semibold text-green-600">
//                     ${item.treatment_cost_usd.toLocaleString()}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="bg-blue-700 block h-20 p-2 rounded-2xl text-center text-white font-semibold  cursor-pointer">
//         <button className="border border-gray-100 px-5 mr-5 py-1 rounded-2xl" disabled={indexOfLastData === hospital.length} onClick={() => paginate(currentPage + 1)}>Next </button>
//         <span className="font-semibold text-[lightgray]">{indexOfLastData}</span> of <span className="font-semibold text-[lightgray]">{hospital.length}</span>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import { useEffect, useState, useMemo } from "react";
import hospital from "./hospital.json";
import Popup from "./components/Popup";

const Dashboard = () => {
  const [data, setData] = useState({});
  const [openModal, setOpenModal] = useState(false);

  // States for filters
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedDisease, setSelectedDisease] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 20;


  const departments = [...new Set(hospital.map(item => item.department))];
  const genders = [...new Set(hospital.map(item => item.gender))];
  const diseases = [...new Set(hospital.map(item => item.disease))];

  const filteredData = useMemo(() => {
    let result = hospital.filter((item) => {
      return (
        // item.patient_id.includes(searchTerm) &&
        (selectedDepartment === "" || item.department === selectedDepartment) &&
        (selectedGender === "" || item.gender === selectedGender) &&
        (selectedDisease === "" || item.disease === selectedDisease)
      );
    });


    result.sort((a, b) => {
      return sortOrder === "asc"
        ? a.treatment_cost_usd - b.treatment_cost_usd
        : b.treatment_cost_usd - a.treatment_cost_usd;
    });

    return result;
  }, [searchTerm, selectedDepartment, selectedGender, selectedDisease, sortOrder]);

  // Pagination calculation
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);
  const totalPages = Math.ceil(filteredData.length / dataPerPage);

  const handleReset = () => {
    setSearchTerm("");
    setSelectedDepartment("");
    setSelectedGender("");
    setSelectedDisease("");
    setSortOrder("asc");
    setCurrentPage(1);
  };

  return (
    <div className="p-6 bg-slate-100 min-h-screen overflow-y-auto" id="tables">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">

        {/* Header */}
        <div className="px-6 py-5 bg-indigo-700 flex justify-between flex-col md:flex-row items-center text-white">
          <h2 className="text-2xl font-bold">Hospital Management System</h2>
          <span className="bg-indigo-500 px-3 py-1 rounded-full text-sm">Total: {filteredData.length} Records</span>
        </div>

        {openModal && <Popup data={data} setOpenModal={setOpenModal} />}

        {/* Filter Section */}
        <div className="p-4 bg-gray-50 border-b flex flex-wrap gap-4 items-center">

          {/* Search Box */}
          <input
            type="text"
            placeholder="Search by ID..."
            className="border p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none w-full md:w-48"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {/* Department Filter */}
          <select
            className="border p-2 rounded-lg bg-white"
            value={selectedDepartment}
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map(d => <option key={d} value={d}>{d}</option>)}
          </select>

          {/* Gender Filter */}
          <select
            className="border p-2 rounded-lg bg-white"
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          >
            <option value="">All Genders</option>
            {genders.map(g => <option key={g} value={g}>{g}</option>)}
          </select>

          {/* Disease Filter */}
          <select
            className="border p-2 rounded-lg bg-white"
            value={selectedDisease}
            onChange={(e) => setSelectedDisease(e.target.value)}
          >
            <option value="">All Diseases</option>
            {diseases.map(dis => <option key={dis} value={dis}>{dis}</option>)}
          </select>

          {/* Sorting */}
          <select
            className="border p-2 rounded-lg bg-white font-medium"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Cost: Low to High</option>
            <option value="desc">Cost: High to Low</option>
          </select>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="ml-auto bg-rose-500 hover:bg-rose-600 text-white px-5 py-2 rounded-lg transition-all"
          >
            Reset Filters
          </button>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto">
          <table className="md:w-[90%] w-full  text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-bold">
              <tr>
                <th className="px-6 py-4">Patient ID</th>
                <th className="px-6 py-4">Age/Gender</th>
                <th className="px-6 py-4">Disease</th>
                <th className="px-6 py-4">Department</th>
                <th className="px-6 py-4 text-right">Treatment Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {currentData.length > 0 ? currentData.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-indigo-50 transition-colors cursor-pointer"
                  onClick={() => { setData(item); setOpenModal(true); }}
                >
                  <td className="px-6 py-4 font-semibold text-indigo-700">#{item.patient_id}</td>
                  <td className="px-6 py-4">{item.age}y / <span className="capitalize">{item.gender}</span></td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {item.disease}
                    </span>
                  </td>
                  <td className="px-6 py-4">{item.department}</td>
                  <td className="px-6 py-4 text-right font-bold text-emerald-600">
                    ${item.treatment_cost_usd.toLocaleString()}
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" className="text-center py-10 text-gray-400">No records found matching your filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="p-4 bg-gray-50 flex justify-between items-center border-t">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
            className="px-4 py-2 border rounded-lg disabled:opacity-30 hover:bg-white transition"
          >
            Previous
          </button>
          <p className="text-sm font-medium text-gray-600">Page {currentPage} of {totalPages}</p>
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(prev => prev + 1)}
            className="px-4 py-2 border rounded-lg disabled:opacity-30 hover:bg-white transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
