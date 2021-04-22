
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  margin-top: 20px;
`;

export const HeaderTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 30px;
`;

export const ButtonCart = styled.TouchableOpacity`
  align-items: flex-end;
`;

export const Imput = styled.View`
    padding: 10px;
    align-items: center;
`;

export const News = styled.View`
    flex-direction: row;
    width: 100%;
    align-items: center;
`;

export const NewsProducts = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const NewsTitle = styled.Text`
  font-size: 18px;
  color: #4f4a4a;
  padding: 15px;
`;

export const Products = styled.View``;

export const ProductsImg = styled.Image`
  height: 200px;
  width: 100%;
  border-radius: 8px;
`;

export const ProductsDescription = styled.View`
  width: 100%;
  padding: 0 8px;
  align-items: center;
`;

export const ProductsDescriptionTitle = styled.Text`
  font-size: 14px;
  color: #4f4a4a;
`;

export const ProductsDescriptionPrice = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const ProductsDescriptionPriceDiscount = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

export const ProductsDescriptionPriceRegular = styled.Text`
  color: #696969;
  text-decoration: line-through;
  font-size: 15px;
  font-weight: bold;
`;

export const ContainerModal = styled.View`
  
`;

export const TitleModal = styled.Text`
  
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 25px;
  position: absolute;
  right: 0;
`;