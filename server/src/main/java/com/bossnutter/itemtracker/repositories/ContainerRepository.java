package com.bossnutter.itemtracker.repositories;

import com.bossnutter.itemtracker.domain.Container;
import com.bossnutter.itemtracker.domain.ContainerProjection;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = ContainerProjection.class)
public interface ContainerRepository extends CrudRepository<Container, Long> {

}
