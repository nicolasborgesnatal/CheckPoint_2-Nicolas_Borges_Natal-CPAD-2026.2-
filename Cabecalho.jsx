import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';

export function Cabecalho() {
  return (
    <View style={styles.cabecalho}>
      <View style={styles.interno}>
        <View style={styles.caixaLogo}>
          <Image source={require('./assets/logo-assai.png')} style={styles.logo} />
        </View>

        <View style={styles.textos}>
          <Text style={styles.titulo}>Lista de Compras</Text>
          <Text style={styles.subtitulo}>Monte sua lista antes de ir ao Assaí</Text>
        </View>
      </View>

      {/* Faixas nas cores do sol da logo */}
      <View style={[styles.faixa, { backgroundColor: '#E31E24' }]} />
      <View style={[styles.faixa, { backgroundColor: '#F47920' }]} />
      <View style={[styles.faixa, { backgroundColor: '#FFD200' }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  cabecalho: {
    backgroundColor: '#0B3D91',
    // Espaço da barra de status no celular
    paddingTop: Platform.OS === 'web' ? 16 : 48,
  },
  interno: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // Centraliza logo + títulos no eixo horizontal
    justifyContent: 'center',
    gap: 14,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  caixaLogo: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 6,
  },
  logo: {
    width: 72,
    height: 52,
    resizeMode: 'contain',
  },
  textos: {
    // Encolhe e quebra linha em tela estreita, sem esticar
    flexShrink: 1,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  subtitulo: {
    color: '#FFD200',
    fontSize: 13,
    marginTop: 2,
  },
  faixa: {
    height: 4,
  },
});