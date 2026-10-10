import React, { useState, useEffect } from 'react';
import { View, StyleSheet, useWindowDimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Cabecalho } from './Cabecalho';
import { Formulario } from './Formulario';
import { ListaCompras } from './ListaCompras';

export default function App() {
  // Campos do formulário
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('1');

  // Itens da lista de compras
  const [itens, setItens] = useState([]);

  // Id do item sendo editado (null = modo adicionar)
  const [editandoId, setEditandoId] = useState(null);

  // Mensagem de validação do formulário
  const [erro, setErro] = useState('');

  // Largura atual da janela, atualiza sozinha ao redimensionar
  const { width } = useWindowDimensions();
  const telaLarga = width >= 768;

  // Limpa o aviso de erro quando o usuário volta a digitar
  useEffect(() => {
    setErro('');
  }, [nome, quantidade]);

  function limparFormulario() {
    setNome('');
    setQuantidade('1');
    setEditandoId(null);
  }

  function salvarItem() {
    const nomeLimpo = nome.trim();
    const qtd = parseInt(quantidade, 10);

    if (nomeLimpo === '') {
      setErro('Digite o nome do item.');
      return;
    }
    if (!qtd || qtd < 1) {
      setErro('A quantidade precisa ser maior que zero.');
      return;
    }

    if (editandoId !== null) {
      // Map gera um array novo trocando só o item editado
      setItens(
        itens.map((item) =>
          item.id === editandoId
            ? { ...item, nome: nomeLimpo, quantidade: qtd }
            : item
        )
      );
    } else {
      // Spread gera um array novo com o item no final (sem .push)
      const novoItem = {
        id: Date.now().toString(),
        nome: nomeLimpo,
        quantidade: qtd,
      };
      setItens([...itens, novoItem]);
    }

    limparFormulario();
  }

  function iniciarEdicao(item) {
    // Carrega o item no formulário
    setEditandoId(item.id);
    setNome(item.nome);
    setQuantidade(String(item.quantidade));
  }

  function excluirItem(id) {
    // Filter gera um array novo sem o item excluído
    setItens(itens.filter((item) => item.id !== id));

    // Se excluiu o item que estava em edição, volta ao modo adicionar
    if (id === editandoId) {
      limparFormulario();
    }
  }

  return (
    <View style={styles.app}>
      <StatusBar style="light" />
      <Cabecalho />

      {/* Coluna no celular, duas colunas em tela larga */}
      <View style={[styles.conteudo, telaLarga && styles.conteudoLargo]}>
        <View style={telaLarga ? styles.colunaFormulario : null}>
          <Formulario
            nome={nome}
            quantidade={quantidade}
            onChangeNome={setNome}
            // Aceita só dígitos (o teclado numérico não bloqueia na web)
            onChangeQuantidade={(texto) => setQuantidade(texto.replace(/[^0-9]/g, ''))}
            onSalvar={salvarItem}
            onCancelar={limparFormulario}
            editando={editandoId !== null}
            erro={erro}
          />
        </View>

        <ListaCompras
          itens={itens}
          editandoId={editandoId}
          onEditar={iniciarEdicao}
          onExcluir={excluirItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: '#EEF1F6',
  },
  conteudo: {
    flex: 1,
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    padding: 16,
    gap: 16,
  },
  conteudoLargo: {
    flexDirection: 'row',
    gap: 24,
  },
  colunaFormulario: {
    width: 360,
  },
});