
<?php
$active_page = 'editprofile';
include_once 'header.php';

if(!isset($_SESSION['username'])){
    header('location: index.php');
}
?>

<p>Hei <?php echo $_SESSION['username'];?></p>
<form method="post">
    <label for="brukernavn">Brukernavn:</label>
    <input type="text" name="brukernavn" /><br />
    <label for="passord">Passord:</label>
    <input type="password" name="passord" /><br />
    <label for="navn">Fullt navn:</label>
    <input type="text" name="navn" /><br />
    
    <input type="submit" value="Endre" name="submit" />
</form>

<?php
    if(isset($_POST['submit'])){
        //Gjøre om POST-data til variabler
        $brukernavn = $_POST['brukernavn'];
        $passord = $_POST['passord'];
        
        //Koble til databasen
        $dbc = mysqli_connect('localhost', 'root', '', 'mydb')
            or die('Error connecting to MySQL server.');
        
        //Gjøre klar SQL-strengen
        $query = "SELECT username, password from users where username='$brukernavn' and password='$passord'";
        
        //Utføre spørringen
        $result = mysqli_query($dbc, $query)
            or die('Error querying database.');
        
        //Koble fra databasen
        mysqli_close($dbc);


        //Sjekke om spørringen gir resultater
        if($result->num_rows > 0){
            //Gyldig login
            header('location: success.html');
        }else{
            //Ugyldig login
            header('location: failure.html');
        }
    }
?>
