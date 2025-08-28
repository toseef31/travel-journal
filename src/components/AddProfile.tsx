import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/FormWithValidation/GenInput";
import Button from "@/components/Button";

const profileSchema = z.object({
  username: z.string().min(3, "At least 3 characters required"),
  email: z.string().min(3, "At least 5 characters required"),
  password: z.string().min(3, "At least 5 characters required"),
  confirmPassword: z.string().min(3, "At least 5 characters required"),
  location: z.string().min(5, "Atleast 5 chracter required"),
});

type FormData = z.infer<typeof profileSchema>;

export default function AddProfile() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(profileSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Valid Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Username"
        inputType="text"
        placeholder="Enter user name"
        registration={register("username")}
        error={errors.username?.message}
      />

      <Input
        label="Email"
        inputType="email"
        placeholder="Enter email"
        registration={register("email")}
        error={errors.email?.message}
      />

      <Input
        label="Location"
        inputType="text"
        placeholder="Enter location"
        registration={register("location")}
        error={errors.location?.message}
      />

      <Input
        label="Password"
        inputType="password"
        placeholder="Enter password"
        registration={register("password")}
        error={errors.password?.message}
      />

      <Input
        label="Confirm password"
        inputType="password"
        placeholder="Enter confirm password"
        registration={register("confirmPassword")}
        error={errors.confirmPassword?.message}
      />
      <Button btnType="submit" text="submit" />
    </form>
  );
}
