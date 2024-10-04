import { z } from "zod";

export const ToggleTwoFactorAuthSchema = z.object({
  userId: z.string({
    required_error: "User ID is required",
    invalid_type_error: "User ID must be a string",
  }),
  isSet: z.boolean({
    required_error: "Two-factor authentication status is required",
    invalid_type_error: "Two-factor authentication status must be a boolean",
  }),
});

export type zToggleTwoFactorAuthSchema = z.infer<
  typeof ToggleTwoFactorAuthSchema
>;
