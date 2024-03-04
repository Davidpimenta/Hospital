<?php

namespace App\Controllers;

//os recursos do miniframework
use MF\Controller\Action;
use MF\Model\Container;



class AppController extends Action {

	public function index() {
		$this->validaAutenticacao();

		$this->render('home', 'layout1');
	}

	public function validaAutenticacao(){
		session_start();

		if(!isset($_SESSION['id']) || $_SESSION['id'] == '' || !isset($_SESSION['nome']) || $_SESSION['nome'] == ''){
			header('Location: /login?erroL=true');
		}
	}

}


?>