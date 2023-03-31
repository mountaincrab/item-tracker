package com.bossnutter.itemtracker.containers.api;

import com.bossnutter.itemtracker.containers.ContainerMapper;
import com.bossnutter.itemtracker.containers.api.response.ContainerResponse;
import com.bossnutter.itemtracker.containers.repository.ContainerRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class ContainerController {

    private final ContainerRepository containerRepository;
    private final ContainerMapper containerMapper;
    private final ObjectMapper objectMapper;

    public ContainerController(ContainerRepository containerRepository, ContainerMapper containerMapper, ObjectMapper objectMapper) {
        this.containerRepository = containerRepository;
        this.containerMapper = containerMapper;
        this.objectMapper = objectMapper;
    }

    @GetMapping("/containers")
    public List<ContainerResponse> getContainers() {
        return containerRepository.findAll()
                .stream()
                .map(containerMapper::domainToResponse)
                .toList();
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/containers-new")
    public List<ContainerResponse> getContainersNew() {
        return containerRepository.findAll()
                .stream()
                .map(containerMapper::domainToResponse)
                .toList();
    }
}
