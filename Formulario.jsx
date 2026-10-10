import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Botao } from './Botao';

// Props: valores dos campos, funções de alteração, salvar/cancelar, modo edição e erro
export function Formulario({
  nome,
  quantidade,
  onChangeNome,
  onChangeQuantidade,
  onSalvar,
  onCancelar,
  editando,
  erro,
}) {
  return (
    <View style={[styles.card, editando && styles.cardEditando]}>
      <Text style={styles.titulo}>{editando ? 'Editar item' : 'Novo item'}</Text>

      <View style={styles.linha}>
        <View style={styles.campoQtd}>
          <Text style={styles.rotulo}>Qtd.</Text>
          <TextInput
            style={[styles.input, styles.inputQtd]}
            value={quantidade}
            onChangeText={onChangeQuantidade}
            keyboardType="numeric"
            maxLength={3}
          />
        </View>

        <View style={styles.campoNome}>
          <Text style={styles.rotulo}>Item</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex.: Arroz 5kg"
            placeholderTextColor="#8A94A6"
            value={nome}
            onChangeText={onChangeNome}
            // Enter também salva
            onSubmitEditing={onSalvar}
            returnKeyType="done"
          />
        </View>
      </View>

      {/* Só mostra o aviso quando existe erro */}
      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}

      <Botao titulo={editando ? 'Salvar alteração' : 'Adicionar'} onPress={onSalvar} />
      {editando && <Botao titulo="Cancelar" tipo="secundario" onPress={onCancelar} />}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#DCE2EC',
    padding: 16,
    gap: 12,
  },
  cardEditando: {
    borderColor: '#FFD200',
    borderWidth: 2,
  },
  titulo: {
    color: '#0B3D91',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linha: {
    flexDirection: 'row',
    gap: 12,
  },
  campoQtd: {
    width: 72,
  },
  campoNome: {
    flex: 1,
  },
  rotulo: {
    color: '#5B6475',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DCE2EC',
    borderRadius: 10,
    backgroundColor: '#FAFBFD',
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#1A1F2B',
  },
  inputQtd: {
    textAlign: 'center',
  },
  erro: {
    color: '#E31E24',
    fontSize: 13,
  },
});