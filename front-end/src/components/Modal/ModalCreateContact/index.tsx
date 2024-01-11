import { Input } from "../../Inputs";
import { WhiteButton } from "../../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { StyledCreateContact } from "../../../styles/modal";
import { TRegisterValues, createContactSchema } from "./createContactSchema";
import { ContactContext } from "../../../provider/ContactContext/ContactContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { StyledTitleSmall } from "../../../styles/typography";

export const ModalCreateContact = ({ onClose }: { onClose: () => void }) => {
  const { registerContact } = useContext(ContactContext);
  const [isLoading, setIsLoading] = useState(false);
  const [rawPhoneNumber, setRawPhoneNumber] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TRegisterValues>({
    resolver: zodResolver(createContactSchema),
  });

  const submit: SubmitHandler<TRegisterValues> = async (formData) => {
    formData.phone = rawPhoneNumber;

    setIsLoading(true);
    await registerContact(formData);
    setIsLoading(false);
    onClose();
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, "");

    setRawPhoneNumber(inputValue);
    setValue("phone", inputValue);
  };

  return (
    <StyledCreateContact>
      <div className="modalregister_header">
        <div className="modal_header">
          <StyledTitleSmall>Registre um contato</StyledTitleSmall>
          <button
            className="btn_close"
            onClick={() => onClose()}
            aria-label="Fechar"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
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
          type="tel"
          placeholder={"Digite o telefone"}
          value={rawPhoneNumber}
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
        <WhiteButton text={"Registrar"} disabled={isLoading} />
      </form>
    </StyledCreateContact>
  );
};
