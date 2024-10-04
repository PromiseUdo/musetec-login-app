import React, { useEffect } from "react";
import { AuthCard } from "../components/auth-card";
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
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/store/usersApiSlice";
import { LoginSchema } from "@/types/login-schema";
import { setCredentials } from "@/store/authSlice";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const Login = () => {
  const { state: showPassword, toggle: togglePasswordShow } = useToggleState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { user } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (user) {
      navigate("/vendor/dashboard");
    }
  }, [navigate, user]);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    try {
      const { email, password } = values;
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials(res));
      navigate("/vendor/dashboard");
    } catch (error: any) {
      toast.error(error?.data?.message || "Login failed");
      console.log(error);
    }
  };

  return (
    <AuthCard cardTitle={"Login to your account"}>
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

            {/* <FormSuccess message={success} /> */}
            {/* <FormError message={error} /> */}
          </div>
          <Button type="submit" className={cn("w-full my-4 bg-[#550786]")}>
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin text-white" />
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
    </AuthCard>
  );
};

export default Login;
