
<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <meta charset="utf-8">
        <title>PHP Innlogging</title>
    </head>
    <body>
        <p>Opprett ny bruker:</p>
        <form method="post">
            <label for="brukernavn">Brukernavn:</label>
            <input type="text" name="brukernavn" /><br />
            <label for="passord">Passord:</label>
            <input type="password" name="passord" /><br />

            <input type="submit" value="Logg inn" name="submit" />
        </form>    
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
            $stmt = $mysqli -> prepare("INSERT INTO users (username,password) VALUES (?, ?)");
            $stmt -> bind_param("ss", $brukernavn, $passord);
            
            $stmt->execute();
            
            //Sjekke om spørringen gir resultater
            if($stmt->affected_rows){
                //Gyldig login
                echo "Takk for at du lagde bruker! Trykk <a href='index.php'>her</a> for å logge inn";
            }else{
                //Ugyldig login
                echo "Noe gikk galt, prøv igjen!";
            }
            $stmt -> close();
            $mysqli -> close();
        }
    ?>
</html>