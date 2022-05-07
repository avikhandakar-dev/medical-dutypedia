import AppoList from "@components/AppoList";
import DoctorsSlider from "@components/DoctorsSlider";
import Nav from "@components/Nav";
import Sidebar from "@components/Sidebar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="h-screen w-full">
        <div className="flex h-full">
          <div>
            <Sidebar />
          </div>
          <div className="flex-1 bg-primary-50/30 overflow-y-auto">
            <Nav />
            <div className="p-4">
              <div className="bg-white shadow-sm rounded-md p-6">
                <div className="container max-w-screen-2xl mx-auto">
                  <DoctorsSlider />
                  <AppoList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
