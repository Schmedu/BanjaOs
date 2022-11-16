export default function getPrices() {
    let tableHeader = [
        "Service",
        "Preis",
    ]
    let tableContent = [
        ["1 Person / Std (max. 2 Personen)", "10,00€ "],
        ["1 Person / Std (3-4 Personen)", "9,00€"],
        ["1 Person / Std (5-6 Personen)", "8,00€"],
        ["1 Kind / Std (6-15 Jahre)", "5,00€"],
    ];

    return (
        <section>
            <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
                <div className>
                    <div className="relative flex items-center text-center w-3/5 mx-auto">
                        <span className="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16" />
                        <div className>
                            <h2 className="mt-0 mb-5 text-4xl font-medium tracking-wide ">
                                Preise
                            </h2>
                            <p className="mt-4">
                                Wir versuchen Ihnen eine möglichst günstige Alternative zu bieten
                                ein privates Saunaerlebnis zu haben.
                            </p>
                        </div>
                    </div>
                    <div className="relative z-10 flex items-center mx-auto md:w-full">
                        <div className="relative w-full">
                            <div className="overflow-hidden overflow-x-auto md:grid md:grid-cols-2 md:gap-10 p-4">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left font-medium ">
                                                Service
                                            </th>
                                            <th className="px-4 py-2 text-left font-medium ">
                                                Preis
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-4 py-2 font-medium ">
                                                1 Person / Std (max. 2 Personen)
                                            </td>
                                            <td className="px-4 py-2 ">
                                                10,00€{" "}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-medium ">
                                                1 Person / Std (3-4 Personen)
                                            </td>
                                            <td className="px-4 py-2 ">
                                                9,00€
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-medium ">
                                                1 Person / Std (5-6 Personen)
                                            </td>
                                            <td className="px-4 py-2 ">
                                                8,00€
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-medium ">
                                                1 Kind / Std (6-15 Jahre)
                                            </td>
                                            <td className="px-4 py-2 ">
                                                5,00€
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="px-4 py-2 text-left font-medium ">
                                                Extra
                                            </th>
                                            <th className="px-4 py-2 text-left font-medium ">
                                                Preis
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        <tr>
                                            <td className="px-4 py-2 font-medium ">
                                                Birkenzweig / Wenik
                                            </td>
                                            <td className="px-4 py-2 ">
                                                6,00€
                                            </td>
                                        </tr>
                                        <tr className>
                                            <td className="px-4 py-2 font-medium ">
                                                Mentholkristalle (Aufguss)
                                            </td>
                                            <td className="px-4 py-2 ">
                                                3,00€{" "}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-medium ">
                                                Handtuch leihen
                                            </td>
                                            <td className="px-4 py-2 ">
                                                3,00€
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-2 font-medium ">
                                                Badeschuhe leihen
                                            </td>
                                            <td className="px-4 py-2 ">
                                                3,00€
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}