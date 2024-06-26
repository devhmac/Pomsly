import Header from "@/components/Header";
import { Button } from "./ui/button";
import { Timer } from "./Timer";

import MaxWidthWrapper from "./MaxWidthWrapper";
import ToDoWrapper from "./table/ToDoWrapper";

import TableSkeleton from "./table/skeleton/TableSkeleton";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const LandingLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <MaxWidthWrapper className="sm:mt-30 mb-6 mt-28 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200/50 bg-popover/25 px-6 py-2 shadow-md backdrop-blur-sm transition-all hover:bg-accent/50">
          <p className="text-sm font-semibold text-primary">v0.6 Now Live!</p>
        </div>
        <Header />
        <div className="mt-5 rounded-lg hover:bg-gradient">
          <Link href="/dashboard">
            <Button className="hover:muted m-0.5 bg-primary  text-popover hover:shadow-md hover:shadow-indigo-300/40">
              Get Started <ChevronRight className="ml-1 mr-0 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </MaxWidthWrapper>

      {/* <Timer className={" shadow-[rgba(165,_180,_252,_0.4)_0px_30px_90px]"} /> */}
      <div className="w-full rounded-lg sm:w-auto">
        <Timer className={"landing-highlight"} />
      </div>

      <MaxWidthWrapper className="mb-12 mt-24 text-center ">
        <h2 className="sub-header-text mb-6 ">Track your Velocity</h2>
        <p className="landing-sub-text">
          Time based tasks management to organize your workflow and keep you on
          track.
        </p>
      </MaxWidthWrapper>
      <div className="w-full rounded-lg sm:w-auto">
        {/* shadow-[rgba(165,_180,_252,_0.4)_0px_30px_90px] */}
        <ToDoWrapper className="landing-highlight" />
        {/* <ToDoWrapper className={"w-full shadow-xl shadow-indigo-300/40"} /> */}
        {/* really cool echo background */}
      </div>

      <div>
        <div>
          <div className="max-w-8xl mx-auto px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-24">
              {/* move this into the table component */}
              {/* <div className="border-shadow-2 m-2 rounded-xl p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"></div> */}
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
