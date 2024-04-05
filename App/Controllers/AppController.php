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

	public function abrirOrderHistory(){
		$this->validaAutenticacao();

		$this->render('orderhistory', 'layout1');
		$this->listarPedidos();
	}

	public function abriRequests(){
		$this->validaAutenticacao();

		$this->render('requests', 'layout1');
	}

	public function fazerRequest(){
		session_start();
		
		$pedidos = Container::getModel('Pedidos');
		$pedidos->__set('id_usuario', $_SESSION['id']);
		for($i = 0; $i < count($_POST);  $i++){
			$pedidos->__set('pedido', explode(',', $_POST[$i])[0]);
			$pedidos->__set('valor', explode(',', $_POST[$i])[1]);
			$pedidos->__set('img', explode(',', $_POST[$i])[0] . '.JPG');
			$pedidos->fazerPedido();
		}

		header('Location: /requests?pedidoRealizado');
		?>
	<?php }
	

	public function listarPedidos(){
		$pedidos = Container::getModel('Pedidos');

		mostrarDados($pedidos->retornarTodosPedidos());
	}
}
?>