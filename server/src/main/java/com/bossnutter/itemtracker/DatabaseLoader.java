package com.bossnutter.itemtracker;

import com.bossnutter.itemtracker.domain.Container;
import com.bossnutter.itemtracker.domain.Item;
import com.bossnutter.itemtracker.repositories.ContainerRepository;
import com.bossnutter.itemtracker.services.TestDataInitializer;
import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

  private final TestDataInitializer testDataInitializer;

  public DatabaseLoader(TestDataInitializer testDataInitializer) {
    this.testDataInitializer = testDataInitializer;
  }

  @Override
  public void run(String... args) {
    testDataInitializer.reset();
  }
}
