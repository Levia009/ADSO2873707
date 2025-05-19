<?php
$nombre = $_POST['txtNombre'] ?? null;
$edad = $_POST['txtEdad'] ?? 0;
$telefono = $_POST['txtTelefono'] ?? null;

if ($nombre != "" && $edad != 0 && $telefono != "") {
    $resp = "Hola, $nombre ";
    if ($edad >= 18) {
        $resp .= "Usted es mayor de edad";
    } else {
        $resp .= "Usted es menor de edad";
    }
    $operador = substr($telefono, 0, 3);
    if ($operador == 310 || $operador == 311 || $operador == 312 || $operador == 313) {
        $resp .=" y tiene operador Claro";
    } elseif ($operador == 315 || $operador == 316) {
        $resp .=" y tiene operador Movistar";
    } elseif ($operador == 300 || $operador == 304) {
        $resp .=" y tiene operador Tigo";
    } else {
        $resp .=" y su operador es desconocido";
    }
    //echo $resp;
    $arrayResp = [
        "status" => true,
        "message" => $resp
    ];
} else {
    $arrayResp = [
        "status" => false,
        "message" => "Faltan datos en la peticion"
    ];
}
header('Content-Type: application/json');

echo json_encode($arrayResp);
?>