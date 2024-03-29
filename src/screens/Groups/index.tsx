import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from './styles';

export default function Groups() {
  const [groups, setGroups] = useState<string[]>(["Turma do AI CHAVINHO", "Turma do Chaves", "Turma do Chapolin", "Turma 1", "AAAAAA", "BBBBBBBBBB"]);

  return (
    <Container>
      <Header />

      <Highlight 
        title = "Turmas"
        subtitle = "Jogue com a sua turma" 
      />

      <FlatList 
        data = {groups}
        keyExtractor = {item => item}
        renderItem = {({ item }) => (
          <GroupCard 
            title = {item} />
        )}
        contentContainerStyle = {groups.length === 0 && { flex: 1 }}
        ListEmptyComponent = {() => (
          <ListEmpty 
            message = "Você ainda não possui turmas" />
        )}
      />

    </Container>
  );
}