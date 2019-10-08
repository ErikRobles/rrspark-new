<?php
class geo{
    private $ip=null;
    private $geo_key="123/*";
    public function __construct(){
        $this->ip=$_SERVER['REMOTE_ADDR'];
        echo self::setgeo();
    }
    public function setgeo(){
        $key=isset($_POST['key']) ? $_POST['key']:null;
        $message=array();
        if($key!=null && $this->ip!=null && $this->geo_key==$key):
        $message['status']=200;
        $message['ip']=$this->ip;
        else: 
            $message['status']=201;
            $message['ip']="10.20.166.108";
        endif;
        return json_encode($message);
    }
}
$geo=new geo();