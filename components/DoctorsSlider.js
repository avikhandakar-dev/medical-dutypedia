import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const DoctorsSlider = () => {
  return (
    <div>
      <div className="flex justify-end">
        <div className=" space-y-1">
          <span className="text-sm font-medium text-gray-600">Department</span>
          <select className="select select-primary w-full max-w-xs">
            <option selected>Medicine Specialist</option>
            <option>Eye Specialist</option>
          </select>
        </div>
      </div>
      <div className="text-center font-medium text-primary border-b border-primary pb-2">
        Doctores
      </div>
      <div className="relative">
        <span className=" absolute left-4 top-1/2 z-10 w-6 aspect-square rounded-full text-primary border cursor-pointer border-primary flex justify-center items-center -translate-y-1/2">
          <BiChevronsLeft />
        </span>
        <span className=" absolute right-4 top-1/2 z-10 w-6 aspect-square rounded-full text-primary border cursor-pointer border-primary flex justify-center items-center -translate-y-1/2">
          <BiChevronsRight />
        </span>
        <div className="flex gap-4 mt-4 snap-x snap-mandatory flex-nowrap py-4 px-2 overflow-x-scroll no-scrollbar relative cursor-grab">
          {[...Array(10)].map((_, index) => (
            <div
              className={`flex rounded-md border-2 gap-2 p-2 snap-start min-w-max ${
                index === 0 && "border-primary"
              }`}
            >
              <div className="avatar">
                <div className="w-20 rounded">
                  <img
                    src={`https://api.lorem.space/image/face?hash=${index}`}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className=" leading-tight text-sm mb-1">
                  Dr. Kabir Ahasan <br />
                  Rabbanki Jindabad
                </p>
                <p className="text-xs text-primary">(Medical Specialist)</p>
                <p className="text-xs text-gray-500">ID: 98RT5W38</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsSlider;
