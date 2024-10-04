import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "./components/Banner";
import imagesUrl from "@/assets/images/imagesUrl";

type AuthPagesUrl = "login" | "signup";

const bgImages = {
  login: imagesUrl.SignInImage,
  signup: imagesUrl.SignUpImage,
};

const AuthLayout = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const isTablet = useMediaQuery("(max-width: 1023px)");

  const { pathname } = useLocation();
  const currentUrl: AuthPagesUrl = pathname
    .split("/")
    .slice(-1)[0] as AuthPagesUrl;
  const [currentPage, setCurrentPage] = useState<AuthPagesUrl>(currentUrl);

  useEffect(() => {
    if (!pathname) return;
    setCurrentPage(currentUrl as AuthPagesUrl);
  }, [pathname, currentUrl]);

  return (
    <div
      style={{
        gridTemplateRows: isMobile
          ? "2rem 1fr"
          : isTablet
          ? "8rem 1fr"
          : "6rem 1fr",
        gridTemplateColumns: isMobile
          ? "repeat(1, minmax(0, 1fr))"
          : isTablet
          ? "repeat(1, minmax(0, 1fr))"
          : "repeat(2, minmax(0, 1fr))",
      }}
      className={"grid min-h-screen min-w-screen w-full overflow-hidden"}
    >
      <div
        className="hidden lg:block lg:fixed lg:top-0 lg:left-0 lg:max-w-[50%]"
        style={{
          gridColumn: isMobile
            ? "repeat(1, minmax(0, 1fr))"
            : isTablet
            ? "repeat(1, minmax(0, 1fr))"
            : "span 1 / span 1",
          gridColumnStart: isMobile
            ? "repeat(1, minmax(0, 1fr))"
            : isTablet
            ? "repeat(1, minmax(0, 1fr))"
            : "1",
          gridRow: isMobile
            ? "repeat(1, minmax(0, 1fr))"
            : isTablet
            ? "repeat(1, minmax(0, 1fr))"
            : "span 2 / span 2",
          gridRowStart: isMobile
            ? "repeat(1, minmax(0, 1fr))"
            : isTablet
            ? "repeat(1, minmax(0, 1fr))"
            : "1",
          width: isMobile ? "100%" : isTablet ? "100%" : "50%",
        }}
      >
        <Banner image={bgImages[currentPage]} />
      </div>
      <main
        style={{
          gridColumn: isMobile
            ? "span 1 / span 1"
            : isTablet
            ? "repeat(1, minmax(0, 1fr))"
            : "span 1 / span 1",
          gridColumnStart: isMobile
            ? "1"
            : isTablet
            ? "repeat(1, minmax(0, 1fr))"
            : "2",
          gridRow: isMobile
            ? "span 1 / span 1"
            : isTablet
            ? "repeat(1, minmax(0, 1fr))"
            : "span 1 / span 1",
          gridRowStart: isMobile
            ? "1"
            : isTablet
            ? "repeat(1, minmax(0, 1fr))"
            : "1",
        }}
        className="h-screen  text-left "
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
