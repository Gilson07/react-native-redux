import React from 'react';
import { useDispatch } from 'react-redux';

import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  InfoContainer,
  Image,
  Info,
  InfoName,
  Point,
  NewTitle,
  Description,
  DescriptionTitle,
  Footer,
  PriceContainer,
  PriceTitle,
  ButtonAdd
} from './styles';

function NewProduct({ id, img, name, description, price }) {

  const dispatch = useDispatch();

  function handleAdd(product) {
    dispatch({
      type: 'ADD_PRODUCT',
      product
    });
  }

  return (
    <Container>

      <Image source={img} />

      <InfoContainer>
        <Info>
          <InfoName numberOfLines={1}>{name}</InfoName>
        </Info>
        <Point />
        <NewTitle>Novo</NewTitle>
      </InfoContainer>

      <Description>
        <DescriptionTitle numberOfLines={2}>{description}</DescriptionTitle>
      </Description>

      <Footer>
        <PriceContainer>
          <PriceTitle>{"R$ " + price}</PriceTitle>
        </PriceContainer>
        <ButtonAdd onPress={() => handleAdd({ id, img, name, price })}>
          <IoniconsIcon name="ios-add-circle" size={24} color="black" />
        </ButtonAdd>
      </Footer>
    </Container>
  );
}

export default NewProduct;