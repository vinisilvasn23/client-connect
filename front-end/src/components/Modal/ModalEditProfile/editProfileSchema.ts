import { z } from "zod";

export const editUserSchema = z.object({
    fullName: z.string().nonempty("Nome é Obrigatório").max(50,"maximo 50 caracteres").min(2,"Insira um nome válido"),
    email: z.string().nonempty("O e-mail é obrigatório").email("Insira e-mail válido"),
    phone: z.string().nonempty("O telefone é obrigatório").min(11,"Insira um telefone válido"),
})

export type TEditValues = z.infer<typeof editUserSchema>;