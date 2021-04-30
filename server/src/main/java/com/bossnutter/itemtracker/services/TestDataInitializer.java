package com.bossnutter.itemtracker.services;

import com.bossnutter.itemtracker.domain.Container;
import com.bossnutter.itemtracker.domain.Item;
import com.bossnutter.itemtracker.repositories.ContainerRepository;
import com.bossnutter.itemtracker.repositories.ItemRepository;
import java.util.HashSet;
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
    containerRepository.save(garage);
  }

}
