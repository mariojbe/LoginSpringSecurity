package br.org.abmnet.service;

import br.org.abmnet.model.Product;

import java.util.List;

/**
 * Author: Mário Jorge
 * Blog: 
 */

public interface ProductService {

    public Product create(Product smartphone);

    public Product get(int id);

    public Product update(Product product);

    public Product delete(int id);

    public List<Product> getAll();

}
