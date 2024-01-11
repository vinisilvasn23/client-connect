import { z } from "zod";

export const registerUserSchema = z.object({
    fullName: z.string().nonempty("Nome é Obrigatório").max(50,"maximo 50 caracteres").min(2,"Insira um nome válido"),
    email: z.string().nonempty("O e-mail é obrigatório").email("Insira e-mail válido"),
    phone: z.string().nonempty("O telefone é obrigatório").min(11,"Insira um telefone válido"),
    password: z.string().nonempty("Insira uma senha")
    .regex(/(?=.*[A-Z])/, "A senha deve conter pelo menos uma letra maiúscula")
    .regex(/(?=.*[a-z])/, "A senha deve conter pelo menos uma letra minúsculo")
    .regex(/(?=.*\d)/,"A senha deve conter pelo menos um número")
    .regex(/(?=.*[@$!%*#?&])/,"A senha deve conter pelo menos um caractere especial Ex: @, $, !, %, *, #, ? ou &")
    .min(8,"É nescessário conter pelo menos 8 caracters"),
    confirm: z.string().nonempty("Confirme senha")
}).refine(({password, confirm})=> password === confirm,{
    message: "As senhas precisam ser iguais", path: ["confirm"]
})

export type TRegisterValues = z.infer<typeof registerUserSchema>;