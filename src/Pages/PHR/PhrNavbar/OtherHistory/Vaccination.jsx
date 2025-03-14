const Vaccination = () => {

  const data = [
    { Age: "At birth", Disease: "", Vaccination: "BCG for newborns born to parents originally", DueDate: "10/04/2025", GivenDate: "9/05/2025"},
    { Age: "At birth", Disease: "", Vaccination: "Hepatitis B for all newborns", DueDate: "10/04/2025", GivenDate: "9/05/2025"},
    { Age: "2 Months", Disease: "", Vaccination: "DaPT (Diphtheria, Pertussis, Tetanus) Hepatitis", DueDate: "10/04/2025", GivenDate: "9/05/2025"},
    { Age: "2 Months", Disease: "", Vaccination: "Pneumococcal Conjugate (PCV)", DueDate: "10/04/2025", GivenDate: "9/05/2025"},
  ];
  return (
    <div className="px-4 py-5">
      <h2 className="text-lg font-semibold mb-3">Vaccination</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#D1D5DB]">
              <th className="px-4 py-2 text-left">
                Age
              </th>
              <th className=" px-4 py-2 text-center">
              Disease
              </th>
              <th className="px-4 py-2 text-left">
              Vaccination
              </th>
              <th className="px-4 py-2 text-left">
              DueDate
              </th>
              <th className="px-4 py-2 text-left">
              GivenDate
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 bg-white">
                <td className="px-4 py-2">
                  {item.Age}
                </td>
                <td className="px-4  py-2 text-center">
                  {item.Disease}
                </td>
                <td className="px-4 py-2">
                  {item.Vaccination}
                </td>
                <td className="px-4 py-2">
                  {item.DueDate}
                </td>
                <td className="px-4 py-2">
                  {item.GivenDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vaccination;