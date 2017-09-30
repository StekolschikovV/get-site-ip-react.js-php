<?
    // if($_GET["name"]){
    //     echo $_GET["name"]; 
    // }else{
    //     echo 'enpty var';
    // }
    header('Access-Control-Allow-Origin: *'); 

    // $ip = gethostbyname('www.example.com');

    if($_GET["url"]){
        echo gethostbyname($_GET["url"]); 
    }else{
        echo 'empty url';
    }
?>