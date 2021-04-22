import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  margin-right: 30px;
  width: 220px;
`;

export const Image = styled.Image`
  width: 220px;
  height: 150px;
  border-radius: 10px;
`;

export const InfoContainer = styled.View`
 flex-direction: row;
 align-items: center;
 padding-left: 5px;
 margin-top: 5px;
`;

export const Info = styled.View`
  max-width: 175px;
`;

export const InfoName = styled.Text`
  font-size: 14px;
  color: #4f4a4a;
`;

export const Point = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 4px;
  margin: 0 4px;
  background-color: #008f39;
`;

export const NewTitle = styled.Text`
  font-size: 14px;
  color: #008f39;
`;

export const Description = styled.View`
  padding-left: 5px;
  margin-top: 5px;
`;

export const DescriptionTitle = styled.Text`
  font-size: 12px;
  color: #4f4a4a;
`;

export const Footer = styled.View`
  padding-left: 5px;
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.View``;

export const PriceTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const ButtonAdd = styled.TouchableOpacity`
  width: 25px;
`;