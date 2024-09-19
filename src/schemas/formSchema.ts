import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .min(3, "O número mínimo de caracteres é 3."),
  lastname: z
    .string()
    .min(3, "O número mínimo de caracteres é 3."),
    gender: z
      .string().refine((field) => field !== "select", {
        message: "Escolha um gênero"
      }),
  email: z
    .string()
    .min(1, "O campo é obrigatório")
    .email("Utilize um e-mail válido."),
  password: z
    .string()
    .min(6, "A senha precisa ter no mínimo 6 caracteres."),
  confirmpassword: z
    .string()
    .min(6, "A senha precisa ter no mínimo 6 caracteres."),
  agree: z
    .boolean()
    .refine((field) => field === true, {
      message: "Você precisa concordar com os termos."
    }),
})
.refine((field) => field.password === field.confirmpassword, {
  message: "As senhas precisam ser iguais.",
  path: ["confirmpassword"],
});

export type formSchema = z.infer<typeof formSchema>;