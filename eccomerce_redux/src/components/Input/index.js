import React from 'react';

import {
  Container,
  Icon,
  TextInput
} from './styles';

function InputField({ textInput }) {

  return (
    <Container>
      <Icon name="search" />
      <TextInput
        placeholderTextColor="#808080"
        keyboardAppearance="dark"
        placeholder={textInput}
      />
    </Container>
  );
}

export default InputField;