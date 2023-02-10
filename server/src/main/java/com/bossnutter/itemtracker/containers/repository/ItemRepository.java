package com.bossnutter.itemtracker.containers.repository;

import com.bossnutter.itemtracker.containers.domain.Item;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
