<?php
// ini_set('display_errors', 0);
// CSS
$sCss = '';
$i = 0;
foreach(glob('./css/*') as $filename){
  // echo '<div>'.$filename.'</div>';
  if( strpos($filename, 'app.css') ){ echo 'skip'.$filename; continue; }
  // echo '<div>'.$filename.'</div>';
  $sCss = $sCss . trim(file_get_contents($filename));
  // echo '<div>'.$sCss .'</div>';
  $i++;
  echo $i;
}

// echo $sData;
//Mac path -> file_put_contents(__DIR__.'/css/app.css', $sCss);
//Windows path -> file_put_contents(__DIR__.'../css/app.css', $sCss);
file_put_contents(__DIR__.'/css/app.css', $sCss);

exit();

// JS
$sJs = '';
foreach(glob('./js/*') as $filename){
  // echo $filename;
  if( strpos($filename, 'app.js') ){ continue; }
  $sJs .= trim(file_get_contents($filename));
}

// echo $sJs;
file_put_contents(__DIR__.'js/pp.js', $sJs);
