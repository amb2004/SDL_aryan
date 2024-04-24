<?php
define('pi', 3.14);
// interface means extraction

interface shape
{
 function calc_area($l, $w);
 function calc_peri($l, $w);
}
class Circle implements shape
{
 function calc_area($l, $w)
 {
 return pi * $l * $l;
 }
 function calc_peri($l, $w)
 {
 return 2 * pi * $l;
 }
}
class Rectangle implements shape
{
 function calc_area($l, $w)
 {
 return $l * $w;
 }
 function calc_peri($l, $w)
 {
 return 2 * ($l + $w);
 }
}
class Square implements shape
{
 function calc_area($l, $w)
 {
 return $l * $l;
 }
 function calc_peri($l, $w)
 {
 return 4 * $l;
 }
}
$op = isset($_GET['op']) ? $_GET['op'] : null;
echo '<html>';
echo '<head>';
echo '<style>';
echo 'body {';
echo ' font-family: Arial, sans-serif;';
echo ' background-color: #f4f4f4;';
echo ' margin: 0;';
echo ' padding: 0;';
echo ' display: flex;';
echo ' justify-content: center;';
echo ' align-items: center;';
echo ' height: 100vh;';
echo '}';
echo 'div {';
echo ' max-width: 400px;';
echo ' width: 100%;';
echo ' background-color: #fff;';
echo ' padding: 20px;';
echo ' border-radius: 8px;';
echo ' box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);';
echo '}';
echo '</style>';
echo '</head>';
echo '<body>';
echo '<div>';
switch ($op) {
 case 1:
 $l = isset($_GET['l']) ? (int)$_GET['l'] : 0;
 $w = isset($_GET['w']) ? (int)$_GET['w'] : 0;
 $ob = new Rectangle();
 $a = $ob->calc_area($l, $w);
 $v = $ob->calc_peri($l, $w);
 echo "<p>Area of Rectangle is: $a</p><p>Perimeter of Rectangle
is: $v</p>";
 break;
 case 2:
 $l = isset($_GET['l']) ? (int)$_GET['l'] : 0;
 $w = isset($_GET['w']) ? (int)$_GET['w'] : 0;
 $ob = new Square();
 $a = $ob->calc_area($l, $w);
 $v = $ob->calc_peri($l, $w);
 echo "<p>Area of Square is: $a</p><p>Perimeter of Square is:
$v</p>";
 break;
 case 3:
 $r = isset($_GET['r']) ? (int)$_GET['r'] : 0;
 $ob = new Circle();
 $a = $ob->calc_area($r, 0);
 $v = $ob->calc_peri($r, 0);
 echo "<p>Area of Circle is: $a</p><p>Perimeter of Circle is:
$v</p>";
 break;
 default:
 echo "<p>Invalid operation.</p>";
}
echo '</div>';
echo '</body>';
echo '</html>';
?>