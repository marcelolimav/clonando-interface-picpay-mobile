import React, { useState } from 'react';
import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign
} from '@expo/vector-icons';
import { Switch } from 'react-native-gesture-handler';

import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDatails,
  CardTitle,
  CardInfo,
  Img,
  AddContainer,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import creditCard from '../../images/credit-card.png';

const Wallet = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((prevState)=> !prevState);
  }

  function handleToggleUseBalance(){
    setUseBalance((prevState)=> !useBalance);
  }

  return (
    <Wrapper>
      <Header
        colors={
          useBalance
          ? ['#52E78C', '#1AB563']
          : ['#d3d3d3', '#868686']
        }
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible? '0,00' : '----'}</Bold>
            </Value>
            <EyeButton onPress={handleToggleVisibility}>
              <Feather name={isVisible? 'eye' : 'eye-off'} size={20} color='#fff' />
            </EyeButton>
          </BalanceContainer>
          <Info>
            Seu saldo está rendendo 100% do CDI
          </Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons name='cash' size={28} color='#fff' />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome name='bank' size={20} color='#fff' />
              <ActionLabel>Retirar</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Formas de pagamnento
        </PaymentMethodsTitle>

        <Card>
          <CardBody>
            <CardDatails>
              <CardTitle>
                Cadastreseu cartão de crédito
              </CardTitle>
              <CardInfo>
                Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
              </CardInfo>
            </CardDatails>

            <Img source={creditCard} resizeMode='contain'/>
          </CardBody>

          <AddContainer>
            <AntDesign name='pluscircleo' size={30} color='#0db060' />
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddContainer>

        </Card>

        <UseTicketButton>
          <MaterialCommunityIcons name='ticket-outline' size={20} color='#0db060' />
          <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButton>
      </PaymentMethods>

    </Wrapper>
  );
};

export default Wallet;
