import styled, { css } from "styled-components";
import {
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineClock,
} from "react-icons/hi";

export const Container = styled.div`
  padding: 48px 32px;
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--color-border);
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
`;

export const LocationCard = styled.div`
  display: flex;
  align-items: center;
  padding: 7px 0;

  > div {
    margin-left: 8px;

    > p {
      font-size: 16px;
    }
    > strong {
      font-size: 14px;
      font-weight: normal;
      color: var(--color-gray);
    }
  }
`;

const iconCss = css`
  // criando uma estilização e passando como "padrão para um componente de estilo"
  width: 30px;
  height: 30px;
`;

export const LocationIcon = styled(HiOutlineLocationMarker)`
  ${iconCss}
`;

export const ReputationCard = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ReputationThermometer = styled.ol`
  list-style: none;

  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  grid-gap: 7px;
  padding: 0 4px;

  > li {
    width: 100%;
    height: 8px;

    &:nth-child(1) {
      background-color: var(--reputation-1);
    }
    &:nth-child(2) {
      background-color: var(--reputation-2);
    }
    &:nth-child(3) {
      background-color: var(--reputation-3);
    }
    &:nth-child(4) {
      background-color: var(--reputation-4);
    }
    &:nth-child(5) {
      background-color: var(--reputation-5);
    }

    &.active {
      height: 12px;
    }
  }
`;

export const ReputationRow = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: flex-start;

  > div {
    width: 33%;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    > strong {
      font-size: 24px;
      font-weight: bold;
      height: 30px;
    }

    > span {
      font-size: 12px;
    }

    position: relative;

    & + div {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 36px;
        border-left: 1px solid var(--color-border);
      }
    }
  }
`;

export const SuportIcon = styled(HiOutlineChatAlt2)`
  ${iconCss}
`;
export const ClockIcon = styled(HiOutlineClock)`
  ${iconCss}
`;

export const More = styled.a`
  margin-top: 24px;
  font-size: 14px;
  color: var(--color-blue);
  font-weight: bold;
  text-decoration: none;
`;
