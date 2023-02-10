package com.bossnutter.itemtracker.containers.api.response;

import java.util.List;

public record ContainerResponse(
        long id,
        String name,
        String description,
        List<ItemResponse> items
) {
}
