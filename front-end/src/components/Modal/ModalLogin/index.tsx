import { useContext, useState } from "react";
import { Input } from "../../Inputs";
import { SubmitHandler, useForm } from "react-hook-form";
import { WhiteButton } from "../../Button";
import { TLoginValues, loginSchema } from "./loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserContext } from "../../../provider/UserContext/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { StyledTitleSmall } from "../../../styles/typography";
import { StyleModalLogin } from "../../../styles/modal";

export const ModalLogin = ({ handleModal }: { handleModal: () => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleLogin } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const submit: SubmitHandler<TLoginValues> = async (formData) => {
    setIsLoading(true);
    await handleLogin(formData);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <StyleModalLogin>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <div className="modal_header">
          <StyledTitleSmall>Conecte-se à sua Conta</StyledTitleSmall>
          <button
            className="btn_close"
            onClick={handleModal}
            aria-label="Fechar"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <Input
          label={"Email"}
          placeholder={"Digite seu email"}
          {...register("email")}
          error={errors.email?.message}
        />
        <Input
          label={"Password"}
          type={showPassword ? "text" : "password"}
          placeholder={"Digite seu password"}
          {...register("password")}
          error={errors.password?.message}
          appendIcon={
            <button
              type="button"
              className="password-visibility"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          }
        />
        <WhiteButton text={"Entrar"} disabled={isLoading} />
      </form>
    </StyleModalLogin>
  );
};
