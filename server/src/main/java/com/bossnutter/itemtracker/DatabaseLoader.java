package com.bossnutter.itemtracker;

import java.util.Collections;
import java.util.HashSet;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final ContainerRepository containerRepository;

    @Autowired
    public DatabaseLoader(ContainerRepository containerRepository) {
        this.containerRepository = containerRepository;
    }


    @Override
    public void run(String... args) {
        containerRepository.save(new Container("loft", "loft on top floor", new HashSet<>()));

        Container garage = new Container("garage", "outside garage");
        garage.addItem(new Item("bike", "bossnut"));
        garage.addItem(new Item("car", "passat"));
        containerRepository.save(garage);
    }
}
