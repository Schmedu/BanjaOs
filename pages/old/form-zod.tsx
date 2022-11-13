import React from "react";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { formatZodErrors } from "../components/debug";
import Layout from "../components/layout";

/* ---------- Some UI components ----------*/

type AlertType = "error" | "warning" | "success";

// Global Alert div.
function Alert({ children, type }: { children: string; type: AlertType }) {
    const backgroundColor =
        type === "error" ? "tomato" : type === "warning" ? "orange" : "powderBlue";

    return <div style={{ padding: "0 10", backgroundColor }}>{children}</div>;
}

// Use role="alert" to announce the error message.
const AlertInput = ({ children }: { children: React.ReactNode }) =>
    Boolean(children) ? (
        <span role="alert" style={{ color: "tomato" }}>
            {children}
        </span>
    ) : null;

/* ---------- Zod schema et TS type ----------*/

const titles = ["Mr", "Mrs", "Miss", "Dr"] as const;

// Describe the correctness of data's form.
const userSchema = z
    .object({
        firstName: z.string().max(36),
        lastName: z
            .string()
            .nonempty({ message: "The lastName is required." })
            .max(36),
        mobileNumber: z.string().min(10).max(13).optional(),
        email: z
            .string()
            .nonempty("The email is required.")
            .email({ message: "The email is invalid." }),
        confirmEmail: z.string(),
        // At first, no option radio are checked so this is null. So the error is "Expected string, received null".
        // So we need to accept first string or null, in order to apply refine to set a custom message.
        isDeveloper: z.union([z.string(), z.null()]).refine((val) => val !== null, {
            message: "Please, make a choice!"
        }),
        title: z.enum(titles),
        age: z
            .number({ invalid_type_error: "Un nombre est attendu" })
            .int()
            .refine((val) => val >= 18, { message: "Vous devez être majeur" })
    })
    // The refine method is used to add custom rules or rules over multiple fields.
    .refine((data) => data.email === data.confirmEmail, {
        message: "Emails don't match.",
        path: ["confirmEmail"] // Set the path of this error on the confirmEmail field.
    });

// Infer the TS type according to the zod schema.
type User = z.infer<typeof userSchema>;

/* ---------- React component ----------*/

export default function FormZod() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting, isSubmitted, isDirty, isValid }
    } = useForm<User>({
        resolver: zodResolver(userSchema), // Configuration the validation with the zod schema.
        defaultValues: {
            // isDeveloper: undefined,
            // mobileNumber: "",
            // firstName: "toto",
            // lastName: "titi",
            // email: "",
            // confirmEmail: "",
            // title: ""
        }
    });

    // The onSubmit function is invoked by RHF only if the validation is OK.
    const onSubmit = (user: User) => {
        console.log("Submitted: ", user);
    };

    return (
        <Layout>
            <h1>Ajout d'un utilisateur</h1>

            <p style={{ fontStyle: "italic", maxWidth: 600 }}>
                This example is a demo to show the use of a form, driven with React Hook
                Form and validated by zod. The example is in full Typescript.
            </p>

            {Boolean(Object.keys(errors)?.length) && (
                <Alert type="error">There are errors in the form.</Alert>
            )}

            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: "flex", flexDirection: "column", maxWidth: 600 }}
                noValidate
            >
                {/* use aria-invalid to indicate field contain error */}
                <input
                    type="text"
                    placeholder="First name is not mandatory"
                    {...register("firstName")}
                    aria-invalid={errors.firstName ? "true" : "false"}
                    className=""
                />
                <AlertInput>{errors?.firstName?.message}</AlertInput>

                <input
                    type="text"
                    placeholder="Last name (mandatory)"
                    {...register("lastName")}
                    aria-invalid={errors.lastName ? "true" : "false"}
                />
                <AlertInput>{errors?.lastName?.message}</AlertInput>

                <input
                    type="text"
                    placeholder="Email (mandatory)"
                    {...register("email")}
                    aria-invalid={errors.email ? "true" : "false"}
                />
                <AlertInput>{errors?.email?.message}</AlertInput>

                <input
                    type="text"
                    placeholder="The same email as above"
                    {...register("confirmEmail")}
                    aria-invalid={errors.confirmEmail ? "true" : "false"}
                />
                <AlertInput>{errors?.confirmEmail?.message}</AlertInput>

                <input
                    type="tel"
                    placeholder="Mobile number (mandatory)"
                    {...register("mobileNumber")}
                    aria-invalid={errors.mobileNumber ? "true" : "false"}
                />
                <AlertInput>{errors?.mobileNumber?.message}</AlertInput>

                <select
                    {...register("title")}
                    aria-invalid={errors.title ? "true" : "false"}
                >
                    {titles.map((elt) => (
                        <option key={elt} value={elt}>
                            {elt}
                        </option>
                    ))}
                </select>

                <label>
                    Âge
                    <input
                        type="number"
                        placeholder="Age"
                        {...register("age", { valueAsNumber: true })}
                        aria-invalid={errors.age ? "true" : "false"}
                    />
                </label>
                <AlertInput>{errors?.age?.message}</AlertInput>

                <div>
                    <p>Are you a developer? (mandatory)</p>
                    <label>
                        Yes
                        <input {...register("isDeveloper")} type="radio" value="Yes" />
                    </label>
                </div>
                <div>
                    <label>
                        No
                        <input {...register("isDeveloper")} type="radio" value="No" />
                    </label>
                </div>
                <AlertInput>{errors?.isDeveloper?.message}</AlertInput>

                <input
                    type="submit"
                    disabled={isSubmitting || (isSubmitted && !isValid)}
                />
                <pre>{formatZodErrors(errors)}</pre>
                <pre>{JSON.stringify(watch(), null, 2)}</pre>
            </form>
        </Layout>
    );
}
