import { useContext } from "react";
import { UserContext } from "../../provider/UserContext/UserContext";
import { Header } from "../../components/Header";
import {
  StyledParagraph,
  StyledTitle,
  StyledTitleSmall,
} from "../../styles/typography";
import { StyledCard, StyledContent, StyledHome } from "./styled";
import { Footer } from "../../components/Footer";
import { Loading } from "../../components/Loading";

export const HomePage = () => {
  const { loadingPage } = useContext(UserContext);

  if (loadingPage) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <StyledHome>
        <div className="content__apresentation">
          <StyledTitle>Bem-vindo ao Client Connect</StyledTitle>
          <StyledTitleSmall>
            Gerencie seus clientes e contatos de forma fácil e eficiente!
          </StyledTitleSmall>
          <div>
            <StyledTitle>Experimente Agora!</StyledTitle>
            <StyledParagraph>
              Registre-se hoje mesmo e descubra como o Client Connect pode
              facilitar a gestão dos seus relacionamentos comerciais.
            </StyledParagraph>
          </div>
        </div>
        <StyledContent>
          <div className="content__about--text">
            <StyledTitle>O que é o Client Connect?</StyledTitle>
            <StyledParagraph>
              O Client Connect é a solução perfeita para organizar e gerenciar
              seus clientes e seus contatos de maneira eficiente. Simplificamos
              o processo para que você possa se concentrar no que é mais
              importante: construir relacionamentos sólidos.
            </StyledParagraph>
          </div>
        </StyledContent>
        <StyledContent>
          <div>
            <StyledTitle>Principais Recursos</StyledTitle>
            <StyledParagraph>
              Descubra como nosso serviço de recrutamento pode ajudar sua
              empresa a encontrar os melhores talentos.
            </StyledParagraph>
          </div>
          <ul>
            <StyledCard>
              <StyledTitleSmall>Cadastro Simples:</StyledTitleSmall>
              <StyledParagraph>
                Registre seus clientes de maneira fácil e rápida.
              </StyledParagraph>
            </StyledCard>
            <StyledCard>
              <StyledTitleSmall>Vínculo de Contatos:</StyledTitleSmall>
              <StyledParagraph>
                Associe contatos aos clientes para manter tudo centralizado.
              </StyledParagraph>
            </StyledCard>
            <StyledCard>
              <StyledTitleSmall>Visualização Detalhada:</StyledTitleSmall>
              <StyledParagraph>
                Tenha uma visão detalhada de cada cliente e seus contatos
                vinculados.
              </StyledParagraph>
            </StyledCard>
          </ul>
        </StyledContent>
        <div>
          <StyledContent className="content_details">
            <StyledTitle>Por que escolher o Client Connect?</StyledTitle>
            <div>
              <StyledTitleSmall>Simples e Intuitivo:</StyledTitleSmall>
              <StyledParagraph>
                Uma interface fácil de usar, mesmo para usuários iniciantes.
              </StyledParagraph>
              <StyledTitleSmall>Acesse de Qualquer Lugar: </StyledTitleSmall>
              <StyledParagraph>
                Totalmente responsivo para uso em dispositivos móveis.
              </StyledParagraph>
              <StyledTitleSmall>Organização Eficiente: </StyledTitleSmall>
              <StyledParagraph>
                Mantenha-se organizado com a gestão centralizada de clientes e
                contatos.
              </StyledParagraph>
            </div>
          </StyledContent>
        </div>
      </StyledHome>
      <Footer />
    </>
  );
};
