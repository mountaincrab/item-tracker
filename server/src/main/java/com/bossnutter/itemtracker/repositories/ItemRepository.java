package com.bossnutter.itemtracker.repositories;

import com.bossnutter.itemtracker.domain.Item;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends CrudRepository<Item, Long> {

}
