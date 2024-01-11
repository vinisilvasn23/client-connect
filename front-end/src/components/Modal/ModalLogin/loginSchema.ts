import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(3, { message: "Email Inválido" })
    .email({ message: "Preencha o email corretamente" }),
  password: z.string().min(1, { message: "Senha é obrigatório." }),
});
export type TLoginValues = z.infer<typeof loginSchema>;
