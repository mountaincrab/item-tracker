package com.bossnutter.itemtracker.containers.api.request;

import com.bossnutter.itemtracker.containers.domain.Item;

import java.util.Set;

public record ContainerRequest(
    Long id,
    String name,
    String description,
    Set<Item> items
) {
}
