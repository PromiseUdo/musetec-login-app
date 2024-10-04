import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imagesUrl from "@/assets/images/imagesUrl";

type CardWrapperProps = {
  children: React.ReactNode;
  cardTitle?: string;
};

export const AuthCard = ({ children, cardTitle }: CardWrapperProps) => {
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;
  return (
    <div
      className={cn(
        ` h-full mt-4 container relative flex flex-col items-center justify-center lg:px-0`
      )}
    >
      <div className="flex-grow mx-auto flex w-full flex-col justify-center space-y-3 sm:w-[350px]">
        <div className="mb-6 flex flex-col items-center space-y-2 text-center ">
          <Link to="/">
            <img
              src={imagesUrl.Logo}
              height={40}
              width={40}
              className="object-contain object-center"
              loading="eager"
              alt="website logo"
            />
          </Link>

          <h1 className="text-2xl font-bold">{cardTitle}</h1>
        </div>
        <div className="grid gap-6 ">{children}</div>

        <div>
          <div className="flex flex-col gap-4">
            {pathname === "/auth/login" ? (
              <p className="text-center text-sm font-light">
                Do not have an account?{" "}
                <span
                  onClick={() => navigate("/auth/signup")}
                  className="cursor-pointer text-[#2175D6]"
                >
                  Signup
                </span>
              </p>
            ) : (
              <p className="text-center text-sm font-light">
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/auth/login")}
                  className=" cursor-pointer"
                >
                  Sign in
                </span>
              </p>
            )}
            <p className="text-center text-sm font-light">
              Are you a vendor?{" "}
              <span
                onClick={() => navigate("/auth/sign-up")}
                className=" cursor-pointer text-[#2175D6]"
              >
                Start here
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto  mb-6 flex items-center space-x-5">
        <Link className="text-xs" to="/">
          Privacy Policy
        </Link>
        <Link className="text-xs" to="/">
          Terms & Conditions
        </Link>
        <Link className="text-xs" to="/">
          Support{" "}
        </Link>
      </div>
    </div>
  );
};
