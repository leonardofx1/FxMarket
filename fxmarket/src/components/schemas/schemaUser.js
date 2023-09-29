import * as z from 'zod'

export const schemaCreateUser = z.object({
    email: z.string().email({message: 'Por favor ínsira um email válido'}).min(1, {message: 'por favor preencha esse campo'}),
    password: z.string().min(6, {message:'Insira uma senha de no mínimo 6 dígitos'}),
    age: z.number().min(1, {message: 'Por favor preencha esse campo'}).refine(age => age >= 18 & age < 100, {message: 'Você deve ter pelo menos 18 anos para se registrar.'})
})

export const schemaLoginUser = z.object({
    email: schemaCreateUser.email,
    password:schemaCreateUser.password
})
