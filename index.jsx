import React from 'react';
import styled from "styled-components/native";

export default function App() {
    return (
        <Tela>
            <Login>Login</Login>
            <Campo>
                <Inputs placeholder='Digite o Usuário...' placeholderTextColor="#aaa" />
                <Inputs placeholder='Digite a senha...' placeholderTextColor="#aaa" secureTextEntry />
            </Campo>
            <Campo>
                <Botao>
                    <Entrar>Entrar</Entrar>
                </Botao>
            </Campo>
            <Cadastro>Cadastre-se</Cadastro>
            <Esqueci>Esqueci a senha</Esqueci>
        </Tela>
    );
}

const Tela = styled.View`
    flex: 1;
    background-color: #080166;
    padding: 40px;
    align-items: center;
    justify-content: center;
`;

const Login = styled.Text`
    font-size: 48px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 50px;
`;

const Campo = styled.View`
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
`;

const Inputs = styled.TextInput`
    width: 80%;
    background-color: #ffffff;
    font-size: 16px;
    padding: 14px;
    border-radius: 8px;
    text-align: left;
    margin-bottom: 15px;
`;

const Botao = styled.TouchableOpacity`
    width: 80%;
    background-color: #ffffff;
    padding: 14px;
    border-radius: 8px;
    align-items: center;
`;

const Entrar = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #000000;
`;

const Cadastro = styled.Text`
    margin-top: 20px;
    color: #ffffff;
    font-size: 16px;
`;

const Esqueci = styled.Text`
    color: #ffffff;
    font-size: 14px;
    margin-top: 5px;
`;
