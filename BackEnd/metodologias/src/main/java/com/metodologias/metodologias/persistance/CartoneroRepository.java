package com.metodologias.metodologias.persistance;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CartoneroRepository extends JpaRepository<Cartonero, Long>{
	Optional<Cartonero> findByDni(String dni);
}
