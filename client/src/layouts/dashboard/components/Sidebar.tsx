import { Nav } from "./Nav";
import {
  ChevronRight,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  UsersRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToggleState } from "@/hooks/useToggleState";
import { cn } from "@/lib/utils";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useSelector } from "react-redux";
import { UserButton } from "@/components/UserButton";

const Sidebar = () => {
  const { state: showSidebar, toggle: toggleSidebar } = useToggleState();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { user } = useSelector((state: any) => state.auth);

  return (
    <div className="flex flex-col relative min-w-[80px] border-r px-3 pb-10 pt-24 h-screen">
      {!isMobile && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className="rounded-full p-2"
          >
            <ChevronRight
              className={cn(
                showSidebar ? "rotate-180" : "",
                "transition-all duration-100 ease-linear"
              )}
            />
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={isMobile ? true : showSidebar}
        links={[
          {
            title: "Dashbooard",
            to: "/vendor/dashboard",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Customers",
            to: "/vendor/customers",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            to: "/vendor/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            to: "/vendor/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />

      <div className="mt-auto flex items-center justify-center">
        {user ? <UserButton user={user} /> : null}
      </div>
    </div>
  );
};

export default Sidebar;
