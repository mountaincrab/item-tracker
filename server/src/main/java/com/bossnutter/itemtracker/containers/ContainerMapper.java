package com.bossnutter.itemtracker.containers;

import com.bossnutter.itemtracker.containers.api.response.ContainerResponse;
import com.bossnutter.itemtracker.containers.domain.Container;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class ContainerMapper {

    private final ItemMapper itemMapper;

    public ContainerMapper(ItemMapper itemMapper) {
        this.itemMapper = itemMapper;
    }

    public ContainerResponse domainToResponse(Container container) {
        return new ContainerResponse(
                container.getId(),
                container.getName(),
                container.getDescription(),
                container.getItems().stream().map(itemMapper::domainToResponse).collect(Collectors.toList())
        );
    }
}
