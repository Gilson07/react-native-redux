import React, { useState } from 'react';
import { Dimensions, ScrollView, FlatList, TouchableOpacity, Text, Button } from 'react-native';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';
import { Badge } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { addProduct } from '../../store/modules/shopping/actions';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";

import ComponentInput from '../../components/Input';
import ComponentNewProduct from '../../components/NewProduct';

var { height, width } = Dimensions.get("window");

import {
  Container,
  Imput,
  Header,
  HeaderTitle,
  ButtonCart,
  News,
  NewsProducts,
  NewsTitle,
  Products,
  ProductsImg,
  ProductsDescription,
  ProductsDescriptionTitle,
  ProductsDescriptionPrice,
  ProductsDescriptionPriceDiscount,
  ProductsDescriptionPriceRegular,
  ButtonAdd
} from './styles';

function Home() {
  const nav = useNavigation();
  const shoppingSize = useSelector(state => state.shoppingReducer);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Pêra Argentina",
      image: require('../../assets/images/pera.jpeg'),
      description: "Além de sabor super agradável, a Pêra é fonte de vitaminas C, K, ferro e fibras alimentares.",
      price: 7.99,
      discount: 10.00
    },
    {
      id: 2,
      name: "Goiaba",
      image: require("../../assets/images/goiaba.jpeg"),
      description: "A Goiaba tem mais vitamina C que o Limão ou a Laranja.",
      price: 5.50,
      discount: 7.50
    },
    {
      id: 3,
      name: "Morango",
      image: require("../../assets/images/morango.jpeg"),
      description: "O morango é rico em vitaminas e antioxidantes e fica gostoso de varias maneiras.",
      price: 31.90,
      discount: 35.00
    },
    {
      id: 4,
      name: "Mamão Formosa",
      image: require("../../assets/images/mamao.jpeg"),
      description: "Esse ácido ainda combate a osteoporose e o produto é fonte das vitaminas A e C que fortalecem a saúde de olhos, pele e do sistema imunológico.",
      price: 9.90,
      discount: 11.99
    },
    {
      id: 5,
      name: "Couve Manteiga",
      image: require("../../assets/images/couve.jpeg"),
      description: "A couve manteiga é rica em fibras, antioxidantes e tem baixa caloria.",
      price: 6.50,
      discount: 7.00
    }
  ]);
  const [news, setNews] = useState([
    {
      id: 6,
      image: require("../../assets/images/banana.jpeg"),
      name: "Banana Prata Orgânica",
      description: "A banana prata é rica em potássio e cálcio e é uma ótima fonte de fibras.",
      price: 8.00,
    },
    {
      id: 7,
      image: require("../../assets/images/tomate.jpeg"),
      name: "Tomate Perinha Orgânico",
      description: "O tomate perinha é rico em sais minerais e vitaminas A e C e fica uma delicia na salada.",
      price: 12.00
    },
    {
      id: 8,
      image: require("../../assets/images/alface.jpeg"),
      name: "Alface Crespa Orgânica",
      description: "A alface crespa tem esse nome por conta das pequenas ondulações nas pontas de suas folhas.",
      price: 7.00
    },
  ]);

  function handleShoppingCart() {
    nav.navigate("ShoppingCart");
  }

  const dispatch = useDispatch();

  function handleAdd(product) {
    dispatch(addProduct(product));
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>
          E-commerce
          </HeaderTitle>
        <ButtonCart onPress={handleShoppingCart}>
          <Badge value={shoppingSize.length} status="error" containerStyle={{ position: 'absolute', zIndex: 1, top: -11, right: 5 }} />
          <FeatherIcon name="shopping-bag" size={24} color="black" style={{ marginRight: 10, alignItems: 'flex-end' }} />
        </ButtonCart>
      </Header>
      <Imput>
        <ComponentInput textInput="O que está procurando?" />
      </Imput>
      <ScrollView showsVerticalScrollIndicator={false}>
        <News>
          <NewsTitle>Novidades</NewsTitle>
        </News>
        <NewsProducts>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
            {
              news.map(item => (
                <ComponentNewProduct key={item.id}
                  id={item.id}
                  img={item.image}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                />
              ))
            }

          </ScrollView>
        </NewsProducts>

        <News>
          <NewsTitle>Todos os lançamentos</NewsTitle>
        </News>

        <Products>
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            keyExtractor={item => item.id}
            data={products}
            onEndReachedThreshold={0.1}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => { }}
                style={{
                  width: width / 2,
                  marginBottom: 10,
                  padding: 5
                }}
              >
                <ProductsImg
                  source={item.image}
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
                />
                <ProductsDescription>
                  <ProductsDescriptionTitle numberOfLines={1}>
                    {item.name}
                  </ProductsDescriptionTitle>
                  <ProductsDescriptionPrice>
                    <ProductsDescriptionPriceDiscount>
                      {"R$ " + item.price}
                      {` `} - {` `}
                    </ProductsDescriptionPriceDiscount>
                    <ProductsDescriptionPriceRegular>
                      {"R$ " + item.discount}
                    </ProductsDescriptionPriceRegular>
                    <ButtonAdd onPress={() => handleAdd(item)}>
                      <IoniconsIcon name="ios-add-circle" size={24} color="black" />
                    </ButtonAdd>
                  </ProductsDescriptionPrice>
                </ProductsDescription>
              </TouchableOpacity>
            )}
          ></FlatList>
        </Products>

      </ScrollView>
    </Container>
  );
}

export default Home;