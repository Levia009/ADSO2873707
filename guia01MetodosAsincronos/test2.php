<?php
$num1 = $_POST['txtNumero1'] ?? null;
$num2 = $_POST['txtNumero2'] ?? null;

$suma = 0;

if ($num1 && $num2) {
    $suma = $num1 + $num2;
}

echo $suma;
?>