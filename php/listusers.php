
<html>
    <head>
        <link rel="stylesheet" href="style.css">
        <meta charset="utf-8">
        <title>PHP Innlogging</title>
    </head>
    <body>
        <h1>Alle brukere</h1>
        <table>
            <thead>
                <tr>
                    <th>
                        Brukernavn
                    </th>
                    <th>
                        Passord
                    </th>
                </tr>
            </thead>
            <tbody>
                <?php
                //Koble til databasen
                $dbc = mysqli_connect('localhost', 'root', '', 'mydb')
                or die('Error connecting to MySQL server.');
                
                //Gjøre klar SQL-strengen
                $query = "SELECT username, password from users";
                
                //Utføre spørringen
                $result = mysqli_query($dbc, $query)
                or die('Error querying database.');
                
                //Koble fra databasen
                mysqli_close($dbc);
                
                //Sjekke om spørringen gir resultater
                if(!$result->num_rows > 0){
                    echo "<tr><td>Ingen resultater</td></tr>";
                    die();
                }
                
                //Skriv ut en rad for hver bruker
                foreach($result as $user){
                    echo "<tr>";
                    echo "<td>";
                    echo $user['username'];
                    echo "</td>";
                    echo "<td>";
                    echo $user['password'];
                    echo "</td>";
                    echo "</tr>";
                }

                ?>

            </tbody>
        </table>
        
</body>
</html>