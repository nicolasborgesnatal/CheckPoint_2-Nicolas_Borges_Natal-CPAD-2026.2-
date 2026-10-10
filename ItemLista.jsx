import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Props: nome, quantidade, emEdicao, onEditar e onExcluir
export function ItemLista({ nome, quantidade, emEdicao, onEditar, onExcluir }) {
  return (
    <View style={[styles.item, emEdicao && styles.itemEmEdicao]}>
      <View style={styles.selo}>
        <Text style={styles.qtd}>{quantidade}x</Text>
      </View>

      <Text style={styles.nome} numberOfLines={2}>
        {nome}
      </Text>

      <TouchableOpacity
        style={styles.acao}
        onPress={onEditar}
        accessibilityLabel={`Editar ${nome}`}
      >
        <Ionicons name="create-outline" size={20} color="#0B3D91" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.acao, styles.acaoExcluir]}
        onPress={onExcluir}
        accessibilityLabel={`Excluir ${nome}`}
      >
        <Ionicons name="trash-outline" size={20} color="#E31E24" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
  },
  itemEmEdicao: {
    backgroundColor: '#FFF8D6',
  },
  selo: {
    minWidth: 48,
    alignItems: 'center',
    backgroundColor: '#FFF1E6',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  qtd: {
    color: '#F47920',
    fontSize: 15,
    fontWeight: 'bold',
  },
  nome: {
    flex: 1,
    color: '#1A1F2B',
    fontSize: 16,
    fontWeight: '600',
  },
  acao: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EEF3FB',
  },
  acaoExcluir: {
    backgroundColor: '#FDECEC',
  },
});