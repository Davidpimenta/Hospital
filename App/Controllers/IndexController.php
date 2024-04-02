<?php

namespace App\Controllers;

//os recursos do miniframework
use MF\Controller\Action;
use MF\Model\Container;

class IndexController extends Action {

  public function index() {
		$this->view->erroCadastro = false;
		$this->view->erroLogin = false;
		$this->render('login', 'loginlayout');
	}
	
	public function registrar(){
		$usuario = Container::getModel('Usuario');

		$usuario->__set('nome',$_POST['nome']);
		$usuario->__set('email',$_POST['email']);
		$usuario->__set('senha',md5($_POST['senha']));

		if($usuario->validarCadastro() && count($usuario->getUsuarioPorEmail()) == 0) {
		
			$usuario->salvar();

			session_start();

			$_SESSION['nome'] = $usuario->__get('nome');
			$_SESSION['id'] = $usuario->__get('id');
			$_SESSION['email'] = $usuario->__get('email');

			$this->view->erroCadastro = false;
			header('Location: /home');
		} else {

			session_start();

			$_SESSION['nome'] = $_POST['nome'];
      $_SESSION['email'] = $_POST['email'];
      $_SESSION['senha'] = $_POST['senha'];

			$this->view->erroCadastro = true;
			header('Location: /login?erro=true');
		}

	}

}

?>