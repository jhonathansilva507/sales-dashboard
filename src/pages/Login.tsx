import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  console.log({ errors });
  const onSubmit = (data: object) => {
    console.log(data);
    navigate("/dashboard")
  };
  return (
    <div className="bg-slate-100 w-full h-screen flex justify-center items-center">
      <form
        className="flex flex-col items-center bg-white w-70 h-fit p-6 rounded-md gap-5 shadow-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="">
          <p className={`${errors?.name && "text-pink-600"}`}>Nome:</p>
          <input
            className={`border outline-0 p-1 rounded-sm ${errors?.name && "border-pink-500 focus:border-2 focus:border-pink-500"}`}
            type="text"
            placeholder="Nome"
            {...register("name", { required: true })}
          />
          {errors?.name?.type === "required" && (
            <p className="text-pink-600">Este camppo é obrigatório</p>
          )}
        </div>
        <div>
          <p className={`${errors?.email && "text-pink-600"}`}>Email:</p>
          <input
            className={`border outline-0 p-1 rounded-sm ${errors?.email && "border-pink-500 focus:border-2 focus:border-pink-500"}`}
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors?.email?.type === "required" && (
            <p className="text-pink-600">Este camppo é obrigatório</p>
          )}
        </div>
        <div>
          <p className={`${errors?.password && "text-pink-600"}`}>Senha:</p>
          <input
            className={`border outline-0 p-1 rounded-sm ${errors?.password && "border-pink-500 focus:border-2 focus:border-pink-500"}`}
            type="password"
            placeholder="Senha"
            {...register("password", { required: true, minLength: 7 })}
          />
          {errors?.password?.type === "required" && (
            <p className="text-pink-600">Este camppo é obrigatório</p>
          )}
          {errors?.password?.type === "minLength" && (
            <p className="text-pink-600">
              A senha precisa ter no mínimo 7 digitos
            </p>
          )}
        </div>
        <button
          type="submit"
          className="bg-green-500 p-4 rounded-md text-white font-bold w-full cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
