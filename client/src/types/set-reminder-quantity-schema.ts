import { z } from "zod";

export const SetReminderQuantitySchema = z.object({
  reminderQuantity: z.coerce.number().min(1).nonnegative(),
});

export type SetReminderQuantitySchemaType = z.infer<
  typeof SetReminderQuantitySchema
>;
