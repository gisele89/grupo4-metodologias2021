package com.metodologias.metodologias.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.metodologias.metodologias.controller.dto.CartoneroDTO;
import com.metodologias.metodologias.controller.dto.MaterialDTO;
import com.metodologias.metodologias.persistance.Cartonero;
import com.metodologias.metodologias.persistance.CartoneroRepository;
import com.metodologias.metodologias.persistance.Material;
import com.metodologias.metodologias.utils.Mhelper;

@Service
public class CartoneroService {
	
	@Autowired
	CartoneroRepository cartoneroRepository;
	
	public CartoneroDTO insertCartonero(CartoneroDTO cartonero) throws CartoneroDuplicated {
		Optional<Cartonero> _cartonero = cartoneroRepository.findByDni(cartonero.getDni());
		if (_cartonero.isPresent()) 
			throw new CartoneroDuplicated();
		return this.convertToCartoneroDTO(cartoneroRepository.save(this.convertToCartonero(cartonero)));
	}
	
	public CartoneroDTO deleteCartonero(Long idCartonero) throws CartoneroNotFound {
		Optional<Cartonero> cartonero = cartoneroRepository.findById(idCartonero);
		if(cartonero.isPresent()) {
			cartoneroRepository.deleteById(idCartonero);
			return this.convertToCartoneroDTO(cartonero.get());
		}
		throw new CartoneroNotFound();
	}
	
	public CartoneroDTO editCartonero(Long idCartonero, CartoneroDTO cartonero) throws CartoneroNotFound {
		Optional<Cartonero> _cartonero = cartoneroRepository.findById(idCartonero);
		if(_cartonero.isPresent()) {
			cartonero.setIdCartonero(idCartonero);
			return this.convertToCartoneroDTO(cartoneroRepository.save(this.convertToCartonero(cartonero)));
		}
		throw new CartoneroNotFound();
	}

	public CartoneroDTO convertToCartoneroDTO(final Cartonero cartonero) {
		return Mhelper.modelMapper().map(cartonero, CartoneroDTO.class);
	}

	public Cartonero convertToCartonero(final CartoneroDTO cartonero) {
		return Mhelper.modelMapper().map(cartonero, Cartonero.class);
	}

}