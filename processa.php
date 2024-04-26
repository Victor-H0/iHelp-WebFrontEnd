<?php
include_once 'conexao.php';

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $data_nascimento = $_POST['data_nascimento'];
    $numero = $_POST['numero'];
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $result_usuario = "INSERT INTO usuarios (firstname, lastname, data_nascimento, numero, email, senha) VALUES ('$firstname', '$lastname','$data_nascimento', '$numero','$email', '$senha')";
    $resultado_usuario = mysqli_query($conn, $result_usuario);

    if(mysqli_insert_id($conn)){
        header('Location: anuncioProfessor.php');
    }else{
        header('Location: sejaumprofessor.php');
    }



?>