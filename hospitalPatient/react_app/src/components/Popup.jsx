


const Popup = ({ data, openModal, setOpenModal }) => {
    console.log(data)
    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-[100] bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
            <div className="w-[500px] rounded-2xl shadow-lg bg-white p-6 flex flex-col space-y-3 h-max">
                <h2 className="text-xl font-semibold text-gray-800">Patient Details</h2>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Patient ID:</span>
                    <span className="font-bold text-gray-900">{data?.patient_id}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Age / Gender:</span>
                    <span className="font-bold text-gray-900">{data?.age} yrs / {data?.gender}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Disease:</span>
                    <span className="font-bold text-gray-900">{data?.disease}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Department:</span>
                    <span className="font-bold text-gray-900">{data?.department}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Stay (Days):</span>
                    <span className="font-bold text-gray-900">{data?.stay_days}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Treatment Cost (USD):</span>
                    <span className="font-bold text-green-600">${data?.treatment_cost_usd}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Admission Date:</span>
                    <span className="font-bold text-gray-900">{new Date(data.admission_date).toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Discharge Date:</span>
                    <span className="font-bold text-gray-900">{new Date(data?.discharge_date).toLocaleDateString()}</span>
                </div>
                <div className="bg-red-500  text-center p-3 rounded my-3 cursor-pointer text-white" onClick={() => setOpenModal(false)}><button >Close</button></div>
            </div>
        </div>


    )
}


export default Popup