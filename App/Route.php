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


		$this->setRoutes($routes);
	}

}

?>