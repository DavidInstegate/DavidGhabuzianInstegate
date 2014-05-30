<html>
<body>
<?php
class Viewer {
    var $mUnknownType = "mUnknownType";
    var $mBrowsers = array("Firefox","Opera","Chrome","Safari","Mozilla","Netscape","Navigator");
    var $mOperatingSystems = array("Window","Linux");
    function getBrowser($viewer) {
        foreach($this->mBrowsers as $current) {
            if(preg_match("/($current)/i", $viewer)) {
                return $current;
            }
        }
        return $this->mUnknownType;
    }

    function getOperatingSystem($viewer) {
        foreach($this->mOperatingSystems as $current) {
            if(preg_match("/($current)/i",$viewer)) {
                return $current;
            }
        }
        return $this->mUnknownType;
    }
}
$user = $_SERVER["HTTP_USER_AGENT"];
$viewer = new Viewer();
$browser = $viewer->getBrowser($user);
$platform = $viewer->getOperatingSystem($user);
echo("You are using  $browser on $platform");
?>
</body>
</html>
