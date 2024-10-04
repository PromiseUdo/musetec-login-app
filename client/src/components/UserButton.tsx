import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { clearCredentials } from "@/store/authSlice";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "@/store/usersApiSlice";

interface User {
  email: string;
}

export const UserButton = ({ user }: { user: User | null }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();

  const logout = async () => {
    try {
      await logoutApiCall({}).unwrap();
      dispatch(clearCredentials());
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignout = async () => {
    logout();
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none focus:outline-none">
        <Avatar className="w-7 h-7">
          <AvatarFallback className="bg-primary/25">
            <div className="font-bold">
              {user?.email?.charAt(0).toUpperCase()}
            </div>
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 p-6" align="end">
        <div className="mb-4 p-4 flex flex-col gap-1 items-center rounded-lg  bg-primary/10">
          <p className="font-bold text-xs">{`${user?.email.split("@")[0]}`}</p>
        </div>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={() => navigate("/vendor/settings")}
          className="group py-2 font-medium cursor-pointer  ease-in-out "
        >
          <Store
            size={14}
            className="mr-3  group-hover:scale-75 transition-all duration-300 ease-in-out"
          />
          Settings
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleSignout}
          className="py-2 group focus:bg-destructive/30 font-medium cursor-pointer "
        >
          <LogOut
            size={14}
            className="mr-3  group-hover:scale-75 transition-all duration-300 ease-in-out"
          />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
