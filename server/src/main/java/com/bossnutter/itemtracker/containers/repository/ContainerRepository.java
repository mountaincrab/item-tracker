package com.bossnutter.itemtracker.containers.repository;

import com.bossnutter.itemtracker.containers.domain.Container;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ContainerRepository extends JpaRepository<Container, Long> {

}
