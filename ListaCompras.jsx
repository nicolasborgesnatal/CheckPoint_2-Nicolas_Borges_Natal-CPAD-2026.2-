import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ItemLista } from './ItemLista';

// Props: itens, editandoId, onEditar e onExcluir
export function ListaCompras({ itens, editandoId, onEditar, onExcluir }) {
  // Soma as quantidades de todos os itens
  const totalUnidades = itens.reduce((soma, item) => soma + item.quantidade, 0);
  const textoItens = itens.length === 1 ? 'item' : 'itens';
  const textoUnidades = totalUnidades === 1 ? 'unidade' : 'unidades';

  return (
    <View style={styles.card}>
      <View style={styles.topo}>
        <Text style={styles.titulo}>Sua lista</Text>
        <Text style={styles.resumo}>
          {itens.length} {textoItens} · {totalUnidades} {textoUnidades}
        </Text>
      </View>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemLista
            nome={item.nome}
            quantidade={item.quantidade}
            emEdicao={item.id === editandoId}
            onEditar={() => onEditar(item)}
            onExcluir={() => onExcluir(item.id)}
          />
        )}
        // Redesenha os itens quando muda o item em edição
        extraData={editandoId}
        ItemSeparatorComponent={() => <View style={styles.separador} />}
        ListEmptyComponent={
          <View style={styles.vazio}>
            <Ionicons name="cart-outline" size={40} color="#B8C0CE" />
            <Text style={styles.textoVazio}>Sua lista está vazia.</Text>
            <Text style={styles.textoVazio}>Adicione o primeiro item.</Text>
          </View>
        }
        contentContainerStyle={styles.conteudo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DCE2EC',
    overflow: 'hidden',
  },
  topo: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  titulo: {
    color: '#0B3D91',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resumo: {
    color: '#F47920',
    fontSize: 13,
    fontWeight: '600',
  },
  conteudo: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  separador: {
    height: 1,
    backgroundColor: '#EEF1F6',
    marginHorizontal: 8,
  },
  vazio: {
    alignItems: 'center',
    paddingVertical: 40,
    gap: 4,
  },
  textoVazio: {
    color: '#8A94A6',
    fontSize: 14,
  },
});