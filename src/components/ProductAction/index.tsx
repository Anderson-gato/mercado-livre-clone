import React from "react";
import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchPag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from "./styles";

export const ProductAction = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Tênis azul da marca x</h1>
        <HeartIcon />
      </Row>

      <DispatchPag>Enviando normalmente</DispatchPag>

      <PriceCard>
        <PriceRow>
          <span className="simbol">R$</span>
          <span className="fraction">120</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 3x de 40,33</InstallmentsInfo>
      </PriceCard>

      <StockStatus>Estoque disponível</StockStatus>

      <MethodCard>
        <CheckIcon />

        <div>
          <span className="title">Frete Grátis</span>
          <span className="details">Benefícios show</span>
          <a href="#.com" className="more">
            Ver mais opções
          </a>
        </div>
      </MethodCard>

      <Actions>
        <Button solid>Comprar agora</Button>
        <Button>Adicionar ao carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon />
          <p>Compra garantida, recebe o produto ou devolvemos o seu dinheiro</p>
        </li>
      </Benefits>
    </Container>
  );
};
