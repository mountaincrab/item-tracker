package com.bossnutter.itemtracker.domain;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Container {

  private @Id
  @GeneratedValue
  Long id;
  private String name;
  private String description;

  @OneToMany(mappedBy = "container", cascade = CascadeType.ALL)
  private Set<Item> items;

  public Container() {
  }

  public Container(String name, String description) {
    this.name = name;
    this.description = description;
    this.items = new HashSet<>();
  }

  public Container(String name, String description, Set<Item> items) {
    this.name = name;
    this.description = description;
    this.items = items;
  }

  public void addItem(Item item) {
    items.add(item);
    item.setContainer(this);
  }

  @Override
  public boolean equals(Object o) {
      if (this == o) {
          return true;
      }
      if (o == null || getClass() != o.getClass()) {
          return false;
      }
    Container container = (Container) o;
    return Objects.equals(id, container.id) && Objects.equals(name, container.name) &&
        Objects.equals(description, container.description) &&
        Objects.equals(items, container.items);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, description, items);
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Set<Item> getItems() {
    return items;
  }

  public void setItems(Set<Item> items) {
    this.items = items;
  }
}
