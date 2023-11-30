import { Input } from "../../Inputs";
import { WhiteButton } from "../../Button";
import { StyleModalRegister } from "../../../styles/modal";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { UserContext } from "../../../provider/UserContext/UserContext";
import { TRegisterValues, registerUserSchema } from "./registerUserSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faTimes } from "@fortawesome/free-solid-svg-icons";
import { StyledTitleSmall } from "../../../styles/typography";

export const ModalRegister = ({
  onClose,
  setIsLoginModalOpen,
}: {
  onClose: () => void;
  setIsLoginModalOpen: (value: boolean) => void;
}) => {
  const { handleRegister } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterValues>({
    resolver: zodResolver(registerUserSchema),
  });

  const submit: SubmitHandler<TRegisterValues> = async (formData) => {
    setIsLoading(true);
    await handleRegister(formData);

    setTimeout(() => {
      setIsLoading(false);
      onClose();
      setIsLoginModalOpen(true);
    }, 1500);
  };

  return (
    <StyleModalRegister>
      <div className="modal_header">
        <StyledTitleSmall>Registre-se agora mesmo</StyledTitleSmall>
        <button
          className="btn_close"
          onClick={() => onClose()}
          aria-label="Fechar"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <form onSubmit={handleSubmit(submit)} noValidate>
        <Input
          label={"Nome completo"}
          placeholder={"Digite seu nome e sobrenome"}
          {...register("fullName")}
          error={errors.fullName}
        />
        <Input
          label={"Telefone"}
          placeholder={"Digite seu telefone"}
          {...register("phone")}
          maxLength={11}
          error={errors.phone}
        />

        <Input
          label={"Email"}
          placeholder={"Digite seu email"}
          {...register("email")}
          error={errors.email}
        />
        <Input
          label={"Senha"}
          type={showPassword ? "text" : "password"}
          placeholder={"Digite sua senha"}
          {...register("password")}
          error={errors.password}
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
        <Input
          label={"Confirme sua Senha:"}
          type="password"
          placeholder={"Confirme sua senha"}
          {...register("confirm")}
          error={errors.confirm}
        />
        <WhiteButton text={"Registrar"} disabled={isLoading} />
      </form>
    </StyleModalRegister>
  );
};
