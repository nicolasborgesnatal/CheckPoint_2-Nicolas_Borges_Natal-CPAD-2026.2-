import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Props: titulo, onPress e tipo ('primario' ou 'secundario')
export function Botao({ titulo, onPress, tipo = 'primario' }) {
  const secundario = tipo === 'secundario';

  return (
    <TouchableOpacity
      style={[styles.botao, secundario && styles.botaoSecundario]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.texto, secundario && styles.textoSecundario]}>{titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#F47920',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  botaoSecundario: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#DCE2EC',
  },
  texto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoSecundario: {
    color: '#0B3D91',
  },
});