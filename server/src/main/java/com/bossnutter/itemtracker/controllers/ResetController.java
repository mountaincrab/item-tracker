package com.bossnutter.itemtracker.controllers;

import com.bossnutter.itemtracker.services.TestDataInitializer;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ResetController {

  private final TestDataInitializer testDataInitializer;

  public ResetController(TestDataInitializer testDataInitializer) {
    this.testDataInitializer = testDataInitializer;
  }

  @RequestMapping(value = "/reset")
  public void reset() {
    testDataInitializer.reset();
    System.out.println("reset containers");
  }
}
