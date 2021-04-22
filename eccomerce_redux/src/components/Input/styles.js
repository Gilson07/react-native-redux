import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 90%;
  height: 45px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 0 15px;
`;

export const Icon = styled(FeatherIcon)`
  font-size: 20px;
  color: #4f4a4a;
  margin-right: 5px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #4f4a4a;
`;