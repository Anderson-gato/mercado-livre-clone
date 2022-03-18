import React from "react";
import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SuportIcon,
  ClockIcon,
  More,
} from "./styles";

export const SellerInfo = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>
      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localização</p>
          <strong>Rio grande do norte, vera-cruz</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li className="active"></li>
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>547</strong>
            <span>vendas nos últimos 4 meses</span>
          </div>

          <div>
            <strong>
              <SuportIcon />
            </strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span>vendas nos últimos 4 meses</span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More href="#">Ver mais informações sobre o vendedor</More>
    </Container>
  );
};
