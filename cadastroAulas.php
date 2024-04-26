<?php
include_once 'conexao.php';

    $adicionar_materia = $_POST['adicionar_materia'];
    $titulo_anuncio = $_POST['titulo_anuncio'];
    $sobre_aula = $_POST['sobre_aula'];
    $tipo_aula = $_POST['tipo_aula'];
    $lugar = $_POST['lugar'];
    $tarifa_horaria = $_POST['tarifa_horaria'];
    

    $result_cadastro_aula= "INSERT INTO cadastro (adicionar_materia, titulo_anuncio, sobre_aula, tipo_aula, lugar, tarifa_horaria) VALUES ('$adicionar_materia', '$titulo_anuncio','$sobre_aula','$tipo_aula', '$lugar','$tarifa_horaria')";
    $resultado_cadastro_aula = mysqli_query($conn, $result_cadastro_aula);


    if(mysqli_insert_id($conn)){
        header("Location: login.php");
    }else{
        header("Location: index.php");
    }
  

?>