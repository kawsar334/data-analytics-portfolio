const Education = () => {
    const educationData = [
        {
            degree: "Fazil (Bachelor's in Islamic Studies)",
            institution: "ABC Madrasa",
            year: "2016 - 2020",
            details: "Completed Fazil with in-depth studies in Islamic jurisprudence and Arabic literature.",
        },
        {
            degree: "Dakhil (Secondary Education Equivalent)",
            institution: "XYZ Madrasa",
            year: "2014 - 2016",
            details: "Specialized in Islamic studies and modern subjects like Mathematics and English.",
        },
    ];

    return (
        <section className="w-full px-5 py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Educational Qualification</h2>
            <div className="space-y-6">
                {educationData.map((edu, index) => (
                    <div
                        key={index}
                        className="p-6 border rounded-lg shadow-lg bg-white dark:bg-gray-800"
                    >
                        <h3 className="text-2xl font-bold text-blue-600">{edu.degree}</h3>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                            {edu.institution}
                        </p>
                        <p className="text-md text-gray-600 dark:text-gray-400">{edu.year}</p>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            {edu.details}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
