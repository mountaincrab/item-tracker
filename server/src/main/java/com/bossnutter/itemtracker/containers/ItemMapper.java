package com.bossnutter.itemtracker.containers;

import com.bossnutter.itemtracker.containers.api.response.ItemResponse;
import com.bossnutter.itemtracker.containers.domain.Item;
import org.springframework.stereotype.Service;

@Service
public class ItemMapper {

    public ItemResponse domainToResponse(Item item) {
        return new ItemResponse(
                item.getId(),
                item.getName(),
                item.getDescription(),
                item.getContainer().getId()
        );
    }
}
