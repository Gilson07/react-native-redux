import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;

export const ButtonGoBack = styled.TouchableOpacity`
    width: 40px;
`;


export const HeaderTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

export const HeaderRight = styled.View`
    width: 40px;
`;

export const Products = styled.View`
`;

export const ListingProducts = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #d3d3d3;
    margin: 15px;
    border-radius: 10px;
    padding: 5px;
`;

export const ContainerProducts = styled.View`
    padding: 15px;
    margin-bottom: 5px;
`;

export const Name = styled.Text`
    font-size: 16px;
    margin-bottom: 5px;
`;

export const Price = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const ContainerAmount = styled.View`
`;

export const Amount = styled.View`
    flex-direction: row;
`;

export const AmountSubtract = styled.TouchableOpacity``;

export const AmountAdd = styled.TouchableOpacity``;

export const AmountTitle = styled.Text` 
    font-size: 16px;
`;

export const AmountValue = styled.Text` 
    font-size: 16px;
    margin: 0 5px;
`;

export const ButtonDelete = styled.TouchableOpacity`
`;

export const ContainerResult = styled.View`
    flex: 1;
    margin: 0 15px 10px 15px;
`;

export const Result = styled.View`
    height: 100px;
    width: 100%;
    background-color: #80DE88;
    bottom: 0;
    justify-content: center;
    padding: 20px;
    position: absolute;
    border-radius: 10px;
`;

export const TotalAmount = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const TotalPrice = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;