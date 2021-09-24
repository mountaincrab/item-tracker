package com.bossnutter.itemtracker.domain;

import com.bossnutter.itemtracker.domain.Container;
import com.bossnutter.itemtracker.domain.Item;
import java.util.List;
import org.springframework.data.rest.core.config.Projection;

@Projection(
    name = "fullContainer",
    types = { Container.class }
)
public interface ContainerProjection {
  long getId();
  String getName();
  String getDescription();
  List<Item> getItems();
}
