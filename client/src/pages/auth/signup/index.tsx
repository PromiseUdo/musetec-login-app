import React, { useEffect } from "react";
import { AuthCard } from "../components/auth-card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { EyeOff, Eye } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToggleState } from "@/hooks/useToggleState";
import { useSelector, useDispatch } from "react-redux";
import { useRegisterMutation } from "@/store/usersApiSlice";
import { setCredentials } from "@/store/authSlice";
import { toast } from "sonner";
import { SignUpSchema } from "@/types/signup-schema";
import { Loader2 } from "lucide-react";

const SignUp = () => {
  const { state: showPassword, toggle: togglePasswordShow } = useToggleState();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (user) {
      navigate("/vendor/dashboard");
    }
  }, [navigate, user]);

  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof SignUpSchema>) => {
    try {
      const { email, password } = values;
      const res = await register({ email, password }).unwrap();
      dispatch(setCredentials(res));
      navigate("/vendor/dashboard");
    } catch (error: any) {
      toast.error(error?.data?.message || "Registration failed");
      console.log(error);
    }
  };

  return (
    <AuthCard cardTitle={"Welcome! Begin your journey"}>
      <Form {...form}>
        <form className="" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="">
            <>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Email Address"
                        type="email"
                        autoComplete="email"
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        endContent={
                          <span onClick={togglePasswordShow}>
                            {showPassword ? (
                              <EyeOff className="w-4 h-4" />
                            ) : (
                              <Eye className="w-4 h-4" />
                            )}
                          </span>
                        }
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          </div>
          <Button type="submit" className={cn("w-full my-4 bg-[#550786]")}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin text-white" />
            ) : (
              "Sign up"
            )}
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
};

export default SignUp;
