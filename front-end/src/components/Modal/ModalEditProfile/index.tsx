import { Input } from "../../Inputs";
import { WhiteButton } from "../../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { TEditValues, editUserSchema } from "./editProfileSchema";
import { UserContext } from "../../../provider/UserContext/UserContext";
import { toast } from "react-toastify";
import { updateUser } from "../../../services/requestUser";
import { IUser } from "../../../provider/UserContext/@types";
import { StyledEditProfile } from "../../../styles/modal";
import { StyledTitleSmall } from "../../../styles/typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export const ModalEditProfile = ({
  onClose,
  user,
}: {
  onClose: () => void;
  user: IUser | null;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { token } = useContext(UserContext);
  const [rawPhoneNumber, setRawPhoneNumber] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<TEditValues>({
    resolver: zodResolver(editUserSchema),
    defaultValues: user || {},
  });

  const submit: SubmitHandler<TEditValues> = async (formData) => {
    if (rawPhoneNumber) {
      formData.phone = rawPhoneNumber;
    }

    setIsLoading(true);
    await updateUser(token, user!.id, formData);
    setIsLoading(false);
    toast.success("Contato atualizado com sucesso!");
    onClose();
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setRawPhoneNumber(value);
    setValue("phone", value);
  };

  return (
    <StyledEditProfile>
      <div className="modal_header">
        <StyledTitleSmall>Editar Perfil</StyledTitleSmall>
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
          placeholder={"Digite o nome e sobrenome"}
          {...register("fullName")}
          error={errors.fullName}
        />
        <Input
          label={"Digite o telefone"}
          placeholder={"Digite o telefone"}
          defaultValue={getValues("phone")}
          onChange={handlePhoneChange}
          maxLength={11}
          error={errors.phone}
        />
        <Input
          label={"Email"}
          placeholder={"Digite o email"}
          {...register("email")}
          error={errors.email}
        />
        <WhiteButton text="Salvar Alterações" disabled={isLoading} />
      </form>
    </StyledEditProfile>
  );
};
