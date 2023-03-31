package com.bossnutter.itemtracker.containers.api.request;

public record ItemRequest(
    Long id,
    String name,
    String description
) {
}
