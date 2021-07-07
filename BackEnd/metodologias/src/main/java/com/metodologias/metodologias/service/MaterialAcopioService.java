package com.metodologias.metodologias.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.metodologias.metodologias.controller.dto.MaterialAcopioDTO;
import com.metodologias.metodologias.persistance.MaterialAcopio;
import com.metodologias.metodologias.persistance.MaterialAcopioRepository;
import com.metodologias.metodologias.utils.Mhelper;

@Service
public class MaterialAcopioService {

	@Autowired 
	MaterialAcopioRepository materialAcopioRepository;

	public MaterialAcopioDTO insertMaterialAcopio(MaterialAcopioDTO materialAcopio) {
		if (materialAcopio.getIdMaterialAcopio()!= null) {
			materialAcopio.setPesoAnterior(materialAcopio.getPeso());
		}
		
		//materialAc
		return this.convertToMaterialAcopioDTO(materialAcopioRepository.save(this.convertToMaterialAcopio(materialAcopio)));
	}


	public MaterialAcopioDTO convertToMaterialAcopioDTO(final MaterialAcopio materialAcopio) {
		return Mhelper.modelMapper().map(materialAcopio, MaterialAcopioDTO.class);
	}

	public MaterialAcopio convertToMaterialAcopio(final MaterialAcopioDTO materialAcopio) {
		return Mhelper.modelMapper().map(materialAcopio, MaterialAcopio.class);
	}
}
