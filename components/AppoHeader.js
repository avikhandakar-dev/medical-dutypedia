import { AiOutlinePlusCircle } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { GoCalendar } from "react-icons/go";
const AppoHeader = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mt-4 items-center">
        <div className="flex border-b gap-8">
          <a className="border-b border-primary pb-2 font-medium text-primary">
            Appointment List
          </a>
          <span className="w-0.5 h-6 bg-gray-200" />
          <a className="text-gray-500">All Request</a>
        </div>
        <button className="btn btn-link gap-2 p-0">
          <AiOutlinePlusCircle />
          Add Appointment
        </button>
      </div>

      <div className="flex justify-between flex-col-reverse md:flex-row gap-4  mt-4 md:items-center">
        <div className="form-control">
          <div className="input-group">
            <input
              readOnly
              type="text"
              placeholder="Sat 15 Aug, 2021"
              className="input input-bordered input-primary w-full md:w-auto"
            />
            <button className="btn btn-primary btn-square">
              <GoCalendar className="text-xl" />
            </button>
          </div>
        </div>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square btn-outline border-l-0 border-gray-300">
              <BiSearch className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoHeader;
