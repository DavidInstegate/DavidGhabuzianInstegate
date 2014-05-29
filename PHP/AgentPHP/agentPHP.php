<html>
<body>
<?php
$user = getenv( "HTTP_USER_AGENT" );
$browser = "An unidentified browsero";
$browsers = array('firefox','opera', 'chrome', 'safari', 'mozilla', 'netscape');
foreach($browsers as $current) {
    if(preg_match($current,$user)) {
        $browser = $current;
        break;
    }
}
$platform = "An unidentified OS!";
if( preg_match( "/Windows/i", "$viewer" ) )
{
    $platform = "Windows!";
}
else if ( preg_match( "/Linux/i", "$viewer" ) )
{
    $platform = "Linux!";
}
echo("You are using $browser on $platform");
?>
</body>
</html>
