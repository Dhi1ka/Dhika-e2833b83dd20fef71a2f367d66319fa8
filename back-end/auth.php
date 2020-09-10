<?php

session_start();
if(!isset($_SESSION["db_mkm"])) header("Location: login.php");