
import hospital from "./hospital.json";

export default function Kpi() {
    const totalPatients = hospital.length;

    const totalRevenue = hospital.reduce(
        (sum, patient) => sum + patient.treatment_cost_usd,
        0
    );

    const averageStayDays = (
        hospital.reduce((sum, patient) => sum + patient.stay_days, 0) /
        totalPatients
    ).toFixed(1);

    const diseaseCounts = hospital.reduce((acc, patient) => {
        acc[patient.disease] = (acc[patient.disease] || 0) + 1;
        return acc;
    }, {});

    const mostCommonDisease = Object.entries(diseaseCounts).sort(
        (a, b) => b[1] - a[1]
    )[0][0];

    const cards = [
        {
            title: "Total Patients",
            value: totalPatients.toLocaleString(),
        },
        {
            title: "Total Revenue",
            value: `$${totalRevenue.toLocaleString()}`,
        },
        {
            title: "Average Stay",
            value: `${averageStayDays} Days`,
        },
        {
            title: "Most Common Disease",
            value: mostCommonDisease,
        },
    ];

    return (
        <div className="grid grid-cols-1 gap-2 md:gap-1 md:grid-cols-3 xl:grid-cols-3  md:px-10 py-3 w-[90%]  md:w-full  mx-auto ">
            {cards.map((card) => (
                <div
                    key={card.title}
                    className="rounded-3xl bg-[#9538e2] p-3 md:p-6 shadow transition hover:-translate-y-1 hover:shadow-xl "
                >
                    <p className="text-sm font-medium text-white">{card.title}</p>
                    <h2 className="mt-3 text-2xl font-bold text-slate-800">
                        {card.value}
                    </h2>
                </div>
            ))}
        </div>
    );
}
