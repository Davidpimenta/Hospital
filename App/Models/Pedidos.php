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

  
}

?>