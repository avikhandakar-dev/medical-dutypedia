import RatingRender from "@components/Rating/RatingRender";

const ReviewFilter = () => {
  return (
    <div className="container md:w-[90%] h-auto mx-auto relative ">
      <div>
        <div className=" flex mt-20 justify-center items-center h-auto py-4 rounded-2xl shadow-4xl md:shadow-3xl bg-white drop-shadow-md">
          <div className=" w-[95%] mx-auto mt-5">
            <div className="flex md:flex-row flex-col gap-4 md:gap-8">
              <p className="md:ml-0 flex-shrink-0 w-max">Filter By</p>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center">
                  <RatingRender rating={5} />
                  <span>(5.0)</span>
                </span>

                <span className="flex items-center">
                  <RatingRender rating={4} />
                  <span>(4.0)</span>
                </span>
                <span className="flex items-center">
                  <RatingRender rating={3} />
                  <span>(3.0)</span>
                </span>
                <span className="flex items-center">
                  <RatingRender rating={2} />
                  <span>(2.0)</span>
                </span>
                <span className="flex items-center">
                  <RatingRender rating={1} />
                  <span>(1.0)</span>
                </span>
              </div>
            </div>

            <div className="overflow-x-auto w-full border rounded-lg mt-8">
              <table className="w-full whitespace-nowrap rounded-lg bg-white divide-y divide-gray-300 overflow-hidden">
                <thead className="bg-primary">
                  <tr className="text-white text-left">
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Students Name
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Gender
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Educational Status
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Review
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Descrition
                    </th>
                    <th className="font-semibold text-sm uppercase px-6 py-4">
                      Reply
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 relative">
                      <span className="w-0.5 h-12 bg-gray-200 absolute right-0 top-1/2 -translate-y-1/2" />
                      <div className="flex items-center space-x-3">
                        <div className="inline-flex w-10 h-10">
                          <img
                            className="w-10 h-10 object-cover rounded-full"
                            alt="User avatar"
                            src={`https://api.lorem.space/image/face?hash=10`}
                          />
                        </div>
                        <div>
                          <p> Tanisha shima </p>
                          <p className="text-gray-500 text-sm font-semibold tracking-wide">
                            ID: 343463
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 relative">
                      <span className="w-0.5 h-12 bg-gray-200 absolute right-0 top-1/2 -translate-y-1/2" />
                      <p className=""> Female </p>
                    </td>
                    <td className="px-6 py-4 relative">
                      <span className="w-0.5 h-12 bg-gray-200 absolute right-0 top-1/2 -translate-y-1/2" />{" "}
                      Completed
                    </td>
                    <td className="px-6 py-4 relative">
                      <span className="w-0.5 h-12 bg-gray-200 absolute right-0 top-1/2 -translate-y-1/2" />
                      <RatingRender rating={4.5} />
                    </td>
                    <td className="px-6 py-4 relative">
                      <span className="w-0.5 h-12 bg-gray-200 absolute right-0 top-1/2 -translate-y-1/2" />
                      <p className="text-[#da1e37] italic">12th June 2022</p>
                      <p className="w-64 whitespace-normal">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor.
                        <span className="text-[#da1e37] underline">
                          {" "}
                          read more......
                        </span>
                      </p>
                    </td>

                    <td className="px-6 py-4 relative text-center">
                      <button className="btn btn-primary px-8">Reply</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewFilter;
