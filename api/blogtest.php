<?php
        require 'vendor/autoload.php';
    
    $app = new \Slim\App(array(
            'debug' => true                       
        ));
    
function getDb () {
        $server = 'localhost';
        $user = 'blogApp';
        $pass = 'Paleotrak';
        $database = 'blogApp';
        $connection = new PDO("mysql:host=$server; dbname=$database", $user, $pass);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $connection;
    };
    
    $app->get('/', function ($request, $response, $args) {
        return $response->withStatus(200)->write("Welcome to the API");    
    });
    
    $app->get('/getPost', function() use ($app) {
       $db = getDb();
       
       try{
        $statement = $db->prepare('SELECT * FROM blogdb');
        $statement->execute();
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        $app->response()->headers->set('Content-Type', 'application/json'); //will output the sql data as JSON       
        echo json_encode($result, JSON_PRETTY_PRINT);
        
        
       }catch(PDOException $e) {
            echo '{"error":{"text":' . $e->getMessage() . '}}';
       }
    });
    
     $app->post('/addNewPost', function() use ($app) {
       $db = getDb();
       //$postdata = file_get_contents("php://input");
       $postdata = $app->request->getBody();
       $request = json_decode($postdata);
       
       
       @$title = $request->Title;
       @$date = $request->Date;
       @$body = $request->Body;
       
       
       $sql = "INSERT INTO blogdb (Title, Date, Body) VALUES ('$title', '$date', '$body')";
       try{
            $statement = $db->prepare($sql);
       
         
            $statement->execute();
       }catch(PDOException $e) {
              echo '{"error":{"text":'. $e->getMessage() . '}}';
            }
       
       
    });
     
       
    
    
    
     $app->run();

             

?>