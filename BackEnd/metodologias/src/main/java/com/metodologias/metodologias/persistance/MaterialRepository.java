package com.metodologias.metodologias.persistance;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.metodologias.metodologias.controller.dto.MaterialxCartoneroDTO;

@Repository
public interface MaterialRepository extends JpaRepository<Material, Long> {

	Optional<Material> findByNombre(String nombre);

	
	//List<Material> findAllByCartonero(Cartonero cartonero);

}
