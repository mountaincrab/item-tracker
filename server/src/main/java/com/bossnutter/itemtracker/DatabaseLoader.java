package com.bossnutter.itemtracker;

import com.bossnutter.itemtracker.services.TestDataInitializer;

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
