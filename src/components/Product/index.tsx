import React from "react";
import bluesneakers from "../../assets/pngwing.png";
import { ProductAction } from "../ProductAction";
import { SellerInfo } from "../SellerInfo";
import {
  Container,
  Row,
  Panel,
  Gallery,
  Column,
  Section,
  Description,
} from "./styles";

export function Product() {
  return (
    <Container>
      <Row>
        <a href="www.google.com">Compartilhar</a>
        <a href="www.google.com">Vender um igual</a>
      </Row>

      {/* Painel principaldo produto */}
      <Panel>
        {/* left- Coluna que vai ficar com as imagens do produto */}
        <Column>
          <Gallery>
            <img src={bluesneakers} alt="sneakers" />
          </Gallery>

          {/* informações sobre o produto */}
          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
}
// parte da garantia do produto
const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">
          Compras garantiada com o seguro da minha palavra
        </p>
        <p className="description">
          Receba o produto em sua casa com a entrega mais rápida
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Garantia de 30 dias</p>
      </span>
    </div>

    <a href="#.com">Saiba mais sobre garantia</a>
  </Section>
);

// descrição do produto
const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Esteja conectada com o esporte e lazer com o o Tênis Masculino Esporte
      R-1000. Garantindo o visual moderno e elegante, o modelo traz a tendência
      para destacar seu estilo com originalidade.
      <br />
      <br />
      Nome: Tênis Masculino R-1000 <br />
      Gênero: Masculino <br />
      Indicado para: Dia a Dia <br />
      Estilo da Peça: Com logo <br />
      Material: Têxtil <br />
      Altura do Cano: Cano Baixo <br />
      Fechamento: Cadarço <br />
      Composição: Cabedal: Tecido. <br />
      Solado: Borracha. <br />
      <br />
      Peso do Produto: 400 g (*o peso do calçado varia de acordo com a
      numeração)
      <br />
      Garantia do Fabricante: Contra Defeito de Fabricação
      <br />
      Origem: Nacional
      <br />
      Nota Fiscal: Sim
      <br />
      Número x Tamanho do pé
      <br />
      <br />
      38 ---- 26,5 cm
      <br />
      39 ---- 27,0 cm
      <br />
      40 ---- 28,0 cm
      <br />
      41 ---- 27,0 cm
      <br />
      42 ---- 28,5 cm
      <br />
      43 ---- 29,0 cm
      <br />
    </p>
  </Description>
);
