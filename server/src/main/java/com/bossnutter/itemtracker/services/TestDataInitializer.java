package com.bossnutter.itemtracker.services;

import com.bossnutter.itemtracker.containers.domain.Container;
import com.bossnutter.itemtracker.containers.domain.Item;
import com.bossnutter.itemtracker.containers.repository.ContainerRepository;
import com.bossnutter.itemtracker.containers.repository.ItemRepository;
import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Service;

@Service
public class TestDataInitializer {

  private final ContainerRepository containerRepository;
  private final ItemRepository itemRepository;

  public TestDataInitializer(
      ContainerRepository containerRepository,
      ItemRepository itemRepository) {
    this.containerRepository = containerRepository;
    this.itemRepository = itemRepository;
  }

  public void reset() {
    containerRepository.deleteAll();
    itemRepository.deleteAll();

    containerRepository.save(new Container("loft", "loft on top floor", new HashSet<>()));

    Container garage = new Container("garage", "outside garage");
    garage.addItem(new Item("bike", "bossnut"));
    garage.addItem(new Item("car", "passat"));
//    Container garage = new Container("garage", "outside garage", Set.of(new Item("bike", "bossnut")));
    containerRepository.save(garage);
  }

}
