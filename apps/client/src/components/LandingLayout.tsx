import Header from "@/components/Header";
import { TodoTable } from "./table/TodoTable";
import { Button } from "./ui/button";
import { Timer } from "./Timer";
import { Payment, columns } from "@/components/table/columns";
import { data } from "@/components/table/sample_data";
import MaxWidthWrapper from "./MaxWidthWrapper";

const LandingLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <MaxWidthWrapper className="sm:mt-30 mb-12 mt-28 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200/50 bg-popover/25 px-6 py-2 shadow-md backdrop-blur-sm transition-all hover:bg-accent/50">
          <p className="text-sm font-semibold text-primary">Coming Soon!</p>
        </div>
        <Header />
      </MaxWidthWrapper>
      <Timer />

      <div>
        <div>
          <div className="max-w-8xl mx-auto px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                {/* <TodoTable columns={columns} data={data} /> */}
              </div>
            </div>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
      </div>

      <div className=""></div>
      {/* <Button className="hover:accent/50 bg-gradient" variant="outline">
        Start Live Space
      </Button> */}
    </div>
  );
};

export default LandingLayout;
