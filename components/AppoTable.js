const AppoItems = [
  {
    id: 1,
    dName: "Dr. Kabir Ahasan",
    dAddress: "Rabbanki Jindabad",
    dDepartment: "Medicine Specialist",
    dId: "98RT5W38",
    pName: "Maliha Mouly",
    pAddress: "Rajbari",
    pGender: "Female",
    pAge: "18",
    pId: "6783AS9D",
    date: "01/01/2022",
    status: "Running",
  },
  {
    id: 2,
    dName: "Dr. Kabir Ahasan",
    dAddress: "Rabbanki Jindabad",
    dDepartment: "Medicine Specialist",
    dId: "98RT5W38",
    pName: "Maliha Mouly",
    pAddress: "Rajbari",
    pGender: "Female",
    pAge: "18",
    pId: "6783AS9D",
    date: "01/01/2022",
    status: "Completed",
  },
  {
    id: 3,
    dName: "Dr. Kabir Ahasan",
    dAddress: "Rabbanki Jindabad",
    dDepartment: "Medicine Specialist",
    dId: "98RT5W38",
    pName: "Maliha Mouly",
    pAddress: "Rajbari",
    pGender: "Female",
    pAge: "18",
    pId: "6783AS9D",
    date: "01/01/2022",
    status: "Running",
  },
  {
    id: 4,
    dName: "Dr. Kabir Ahasan",
    dAddress: "Rabbanki Jindabad",
    dDepartment: "Medicine Specialist",
    dId: "98RT5W38",
    pName: "Maliha Mouly",
    pAddress: "Rajbari",
    pGender: "Female",
    pAge: "18",
    pId: "6783AS9D",
    date: "01/01/2022",
    status: "Running",
  },
  {
    id: 5,
    dName: "Dr. Kabir Ahasan",
    dAddress: "Rabbanki Jindabad",
    dDepartment: "Medicine Specialist",
    dId: "98RT5W38",
    pName: "Maliha Mouly",
    pAddress: "Rajbari",
    pGender: "Female",
    pAge: "18",
    pId: "6783AS9D",
    date: "01/01/2022",
    status: "Absence",
  },
  {
    id: 6,
    dName: "Dr. Kabir Ahasan",
    dAddress: "Rabbanki Jindabad",
    dDepartment: "Medicine Specialist",
    dId: "98RT5W38",
    pName: "Maliha Mouly",
    pAddress: "Rajbari",
    pGender: "Female",
    pAge: "18",
    pId: "6783AS9D",
    date: "01/01/2022",
    status: "Pending",
  },
  {
    id: 7,
    dName: "Dr. Kabir Ahasan",
    dAddress: "Rabbanki Jindabad",
    dDepartment: "Medicine Specialist",
    dId: "98RT5W38",
    pName: "Maliha Mouly",
    pAddress: "Rajbari",
    pGender: "Female",
    pAge: "18",
    pId: "6783AS9D",
    date: "01/01/2022",
    status: "Running",
  },
  {
    id: 8,
    dName: "Dr. Kabir Ahasan",
    dAddress: "Rabbanki Jindabad",
    dDepartment: "Medicine Specialist",
    dId: "98RT5W38",
    pName: "Maliha Mouly",
    pAddress: "Rajbari",
    pGender: "Female",
    pAge: "18",
    pId: "6783AS9D",
    date: "01/01/2022",
    status: "Running",
  },
];
const AppoTable = () => {
  return (
    <div className="mt-6">
      <div className="overflow-x-auto w-full border rounded-lg">
        <table className="w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
          <thead className="bg-primary">
            <tr className="text-white text-left">
              <th className="font-semibold text-sm uppercase px-6 py-4">
                {" "}
                S/N{" "}
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4">
                {" "}
                Patient{" "}
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4">
                {" "}
                Sex & Age{" "}
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                {" "}
                Appointment Date{" "}
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4">
                {" "}
                Doctor{" "}
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4 text-center">
                {" "}
                Status{" "}
              </th>
              <th className="font-semibold text-sm uppercase px-6 py-4"> </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {AppoItems.map((item, index) => (
              <tr>
                <td className="px-6 py-4">
                  <p className="">
                    {" "}
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}{" "}
                  </p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="inline-flex w-10 h-10">
                      {" "}
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        alt="User avatar"
                        src={`https://api.lorem.space/image/face?hash=${
                          index + 50
                        }`}
                      />
                    </div>
                    <div>
                      <p> {item.pName} </p>
                      <p className="text-gray-500 text-sm font-semibold tracking-wide">
                        ID: {item.pId}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <p className=""> {item.pGender} </p>
                  <p className="text-gray-500 text-sm font-semibold tracking-wide">
                    {item.pAge}
                  </p>
                </td>
                <td className="px-6 py-4 text-center"> {item.date} </td>
                <td className="px-6 py-4">
                  <p className=" leading-tight text-sm mb-1">
                    {item.dName} <br />
                    {item.dAddress}
                  </p>
                  <p className="text-xs text-primary">({item.dDepartment})</p>
                  <p className="text-xs text-gray-500">ID: {item.dId}</p>
                </td>
                <td className="px-6 py-4 text-center">
                  <span
                    className={`text-sm w-1/3 font-semibold px-2 ${
                      item.status == "Completed" && "text-green-500"
                    } ${item.status == "Running" && "text-yellow-600"}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    className={`btn btn-primary ${
                      item.status != "Completed" && "btn-outline"
                    }`}
                  >
                    View Details
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

export default AppoTable;
