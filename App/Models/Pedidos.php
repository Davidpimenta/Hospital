<?php

namespace App\Models;

use MF\Model\Model;

class Pedidos extends Model{

  private $id_usuario;
  private $pedido;
  private $img;
  private $valor;

  public function __get($atributo){
    return $this->$atributo;
  }

  public function __set($atributo,$valor){
    $this->$atributo = $valor;
  }

  public function fazerPedido(){

    $query = "insert into pedidos(id_usuario,pedido,preco,img)values(:id_usuario,:pedido, :preco, :img)";
    $stmt = $this->db->prepare($query);
    $stmt->bindValue(':id_usuario',$this->__get('id_usuario'));
    $stmt->bindValue(':pedido',$this->__get('pedido'));
    $stmt->bindValue(':preco',$this->__get('valor'));
    $stmt->bindValue(':img',$this->__get('img'));
    $stmt->execute();

    return $this;

  }

  public function retornarTodosPedidos(){

    if($this->__get('id_usuario') == NULL){
      $this->__set('id_usuario', $_SESSION['id']);
    }

    $query = "SELECT pedido, img, preco, id_usuario FROM pedidos LEFT JOIN usuarios ON (pedidos.id_usuario = usuarios.id) WHERE id_usuario = :id";

    $stmt = $this->db->prepare($query);
    $stmt->bindValue(':id', $this->__get('id_usuario'));
    $stmt->execute();
    $lista = $stmt->fetchALL(\PDO::FETCH_OBJ);
    
    return $lista;
  }

  
}

?>