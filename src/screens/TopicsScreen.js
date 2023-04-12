import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import ImageTopic from '../components/ImageTopic';

const data = [
  { image: require('../../assets/pacoca1.png'), title: 'Título 1', content: 'Conteúdo 1'},
  { image: require('../../assets/pacoca2.png'), title: 'Título 2', content: 'Conteúdo 2'},
  { image: require('../../assets/pacoca3.png'), title: 'Título 3', content: 'Conteúdo 3'},
  { image: require('../../assets/pacoca1.png'), title: 'Título 4', content: 'Conteúdo 4'},
  { image: require('../../assets/pacoca2.png'), title: 'Título 5', content: 'Conteúdo 5'},
  { image: require('../../assets/pacoca3.png'), title: 'Título 6', content: 'Conteúdo 6'},
  { image: require('../../assets/pacoca1.png'), title: 'Título 7', content: 'Conteúdo 7'},
  { image: require('../../assets/pacoca2.png'), title: 'Título 8', content: 'Conteúdo 8'},
  { image: require('../../assets/pacoca3.png'), title: 'Título 9', content: 'Conteúdo 9'},
  { image: require('../../assets/pacoca1.png'), title: 'Título 10', content: 'Conteúdo 10'},
  { image: require('../../assets/pacoca2.png'), title: 'Título 11', content: 'Conteúdo 11'},
  { image: require('../../assets/pacoca3.png'), title: 'Título 12', content: 'Conteúdo 12'},
  { image: require('../../assets/pacoca1.png'), title: 'Título 13', content: 'Conteúdo 13'},
  { image: require('../../assets/pacoca2.png'), title: 'Título 14', content: 'Conteúdo 14'},
  { image: require('../../assets/pacoca3.png'), title: 'Título 15', content: 'Conteúdo 15'},
  { image: require('../../assets/pacoca1.png'), title: 'Título 16', content: 'Conteúdo 16'},
  { image: require('../../assets/pacoca2.png'), title: 'Título 17', content: 'Conteúdo 17'},
  { image: require('../../assets/pacoca3.png'), title: 'Título 18', content: 'Conteúdo 18'},
  { image: require('../../assets/pacoca1.png'), title: 'Título 19', content: 'Conteúdo 19'},
  { image: require('../../assets/pacoca2.png'), title: 'Título 20', content: 'Conteúdo 20'},
];  

function TopicsScreen() {
  return (
    <FlatList 
      data={data}
      keyExtractor={item => item.title}
      renderItem={({item}) =>
        <TouchableOpacity>
          <ImageTopic 
            title={item.title}
            content={item.content}
            image={item.image}
          />
        </TouchableOpacity>
      }
    />
  );
}

const styles = StyleSheet.create({
});

export default TopicsScreen;
