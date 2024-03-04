<?php

namespace App;

use MF\Init\Bootstrap;

class Route extends Bootstrap {

	protected function initRoutes() {

		$routes['login'] = array(
			'route' => '/login',
			'controller' => 'indexController',
			'action' => 'index'
		);

		$routes['home'] = array(
			'route' => '/home',
			'controller' => 'appController',
			'action' => 'index'
		);

		$routes['registrar'] = array(
			'route' => '/registrar',
			'controller' => 'indexController',
			'action' => 'registrar'
		);

		$routes['autenticar'] = array(
			'route' => '/autenticar',
			'controller' => 'AuthController',
			'action' => 'autenticar'
		);

		$routes['sair'] = array(
			'route' => '/sair',
			'controller' => 'AuthController',
			'action' => 'sair'
		);


		$this->setRoutes($routes);
	}

}

?>