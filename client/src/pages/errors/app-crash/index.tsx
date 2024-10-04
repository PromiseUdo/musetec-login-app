import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AppCrashPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-[100vh] px-8 flex flex-col xl:flex-row gap-16 items-center justify-center ">
      <div className="w-full justify-center flex flex-col md:items-center">
        <div className="flex flex-col gap-4">
          <div className="flex md:justify-center">
            <p className="text-[#535C5F] text-[80px]  md:text-[142px] lg:text-[160px] font-light">
              Oops!{" "}
            </p>
          </div>
          <div className="w-full">
            <p className="text-[#535C5F] text-[16px] font-medium">Trust Us</p>
            <p className="text-[#535C5F] font-light">This rarely happens</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:items-center  gap-8">
        <div className=" md:w-[424px] flex flex-col gap-4">
          <p className="text-[#535C5F] text-[14px] md:text-[18px] lg:text-2xl font-light">
            Yikes! It seems this application just crashed or you're a bit lost.
          </p>
          <p className="text-[#535C5F] text-[14px] md:text-[18px] lg:text-2xl font-light">
            Of course this is no fault of yours, our engineers will be looking
            into this shortly.
          </p>
        </div>
        <div className="w-full  md:w-[424px] flex flex-col md:flex-row gap-4">
          <Button
            onClick={() => navigate(-1)}
            className="!uppercase w-full hover:text-white  h-[48px]  md:w-[203px] bg-[#F7F7F7] text-point-primary-text whitespace-nowrap"
          >
            Go back
          </Button>
          <Button
            className="!uppercase w-full  h-[48px]  md:w-[203px] whitespace-nowrap"
            onClick={() => navigate("/vendor/dashboard")}
          >
            Go to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppCrashPage;
