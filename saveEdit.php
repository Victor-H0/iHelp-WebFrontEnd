<?php
    include_once 'conexao.php';
    if(isset($_POST['update'])){

        
        $adicionar_materia = $_POST['adicionar_materia'];
        $titulo_anuncio = $_POST['titulo_anuncio'];
        $sobre_aula = $_POST['sobre_aula'];
        $tipo_aula = $_POST['tipo_aula'];
        $lugar = $_POST['lugar'];
        $tarifa_horaria = $_POST['tarifa_horaria'];
        
        $sqlUpdate= "UPDATE cadastro SET titulo_anuncio = '$titulo_anuncio', sobre_aula = '$sobre_aula', tipo_aula = '$tipo_aula',  lugar = '$lugar', tarifa_horaria = '$tarifa_horaria' WHERE adicionar_materia = '$adicionar_materia' " ;
        $result = $conn->query( $sqlUpdate);
    }

   
    header("Location: perfil_professor.php");
    

?>