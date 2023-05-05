
<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <meta charset="utf-8">
        <title>PHP Innlogging</title>
    </head>
    <body>
        <p>Vennligst logg inn:</p>
        <form method="post">
            <label for="brukernavn">Brukernavn:</label>
            <input type="text" name="brukernavn" /><br />
            <label for="passord">Passord:</label>
            <input type="password" name="passord" /><br />
            
            <input type="submit" value="Logg inn" name="submit" />
        </form>
        <p>Eller klikk <a href="registration.php">her</a> for å registrere ny bruker            
    </body>
    <?php
        if(isset($_POST['submit'])){
            //Gjøre om POST-data til variabler
            $brukernavn = $_POST['brukernavn'];
            $passord = $_POST['passord'];
            
             //Koble til databasen
             $mysqli = new mysqli("localhost","root","","mydb");
            
             // Check connection
             if ($mysqli -> connect_errno) {
                 echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
                 exit();
             }
            // prepare and bind
            $stmt = $mysqli -> prepare("SELECT username, password from users where username=? and password=?");
            $stmt -> bind_param("ss", $brukernavn, $passord);
            //Utføre spørringen
            $stmt->execute();
            $result = $stmt->get_result();
            
            //Sjekke om spørringen gir resultater
            if($result->num_rows > 0){
                //Gyldig login
                header('location: success.html');
            }else{
                //Ugyldig login
                header('location: failure.html');
            }
            //Koble fra databasen
            $stmt -> close();
            $mysqli -> close();
        }
    ?>
</html>