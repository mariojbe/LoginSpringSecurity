package br.org.abmnet.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.org.abmnet.model.Product;


/**
 * Author: Mário Jorge
 * Blog: 
 */
public interface ProductRepository extends JpaRepository<Product, Integer>{

}
