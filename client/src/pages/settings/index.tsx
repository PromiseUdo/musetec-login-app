import PageTitle from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  SetReminderQuantitySchema,
  SetReminderQuantitySchemaType,
} from "@/types/set-reminder-quantity-schema";
import { ToggleTwoFactorAuthSchema } from "@/types/toggle-two-factor-auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SettingsPage = () => {
  const form = useForm<z.infer<typeof ToggleTwoFactorAuthSchema>>({
    resolver: zodResolver(ToggleTwoFactorAuthSchema),
    defaultValues: {
      userId: "",
      isSet: false,
    },
    mode: "onChange",
  });

  const reminderQuantityForm = useForm<SetReminderQuantitySchemaType>({
    resolver: zodResolver(SetReminderQuantitySchema),
    defaultValues: {
      reminderQuantity: 0,
    },
    mode: "onChange",
  });

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Settings" />
      <div className="grid gap-6 mt-6  flex-col  w-full ">
        <Form {...form}>
          <form onSubmit={() => {}} className="space-y-6 max-w-lg">
            <div>
              <h3 className="mb-4 text-lg font-medium">Protect account</h3>
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="isSet"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Turn on 2-step authentication
                        </FormLabel>
                        <FormDescription className="max-w-sm">
                          Secure your account data with a one-time code after
                          sign-in to protect against unauthorized access.
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          // defaultValue={field.value}
                          defaultChecked={field.value}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit">Update</Button>
          </form>
        </Form>
      </div>

      <div className="grid gap-6 mt-6  flex-col  w-full ">
        <Form {...reminderQuantityForm}>
          <form onSubmit={() => {}} className="space-y-6 max-w-lg">
            <div>
              <h3 className="mb-4 text-lg font-medium">
                Set Stock Reminder Quantity
              </h3>
              <div className="space-y-4">
                <FormField
                  control={reminderQuantityForm.control}
                  name="reminderQuantity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reminder Quantity</FormLabel>
                      <FormControl>
                        <Input {...field} type="number" min="1" />
                      </FormControl>
                      <FormDescription>
                        Set the quantity at which you want to receive restock
                        reminders.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit">Update</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SettingsPage;
