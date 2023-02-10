package com.bossnutter.itemtracker.containers.api.response;

public record ItemResponse(
    long id,
    String name,
    String description,
    long containerId
) {
}
