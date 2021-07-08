package com.metodologias.metodologias.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.metodologias.metodologias.controller.dto.MaterialAcopioDTO;
import com.metodologias.metodologias.controller.dto.MaterialDTO;
import com.metodologias.metodologias.controller.dto.MaterialxCartoneroDTO;
import com.metodologias.metodologias.persistance.Cartonero;
import com.metodologias.metodologias.persistance.CartoneroRepository;
import com.metodologias.metodologias.persistance.Material;
import com.metodologias.metodologias.persistance.MaterialAcopio;
import com.metodologias.metodologias.persistance.MaterialAcopioRepository;
import com.metodologias.metodologias.persistance.MaterialRepository;
import com.metodologias.metodologias.utils.Mhelper;

@Service
public class MaterialAcopioService {

	@Autowired 
	MaterialAcopioRepository materialAcopioRepository;
	
	@Autowired 
	CartoneroRepository cartoneroRepository;
	
	
	@Autowired 
	MaterialRepository materialRepository;

	public MaterialAcopioDTO insertMaterialAcopio(MaterialAcopioDTO materialAcopio) {
		Optional<Cartonero> cartonero = cartoneroRepository.findById(materialAcopio.getIdCartonero());
		if(cartonero.isPresent()) {
			if (materialAcopio.getIdMaterialAcopio()!= null) {
				materialAcopio.setPesoAnterior(materialAcopio.getPeso());
			}
			
			MaterialAcopio materialAcopiado = new MaterialAcopio() ;
			materialAcopiado.setCartonero(cartonero.get());
			materialAcopiado.setIdMaterialAcopio(materialAcopio.getIdMaterialAcopio());
			materialAcopiado.setPeso(materialAcopio.getPeso());
			materialAcopiado.setPesoAnterior(materialAcopio.getPesoAnterior());
			return this.convertToMaterialAcopioDTO(materialAcopioRepository.save(materialAcopiado));
			//return this.convertToMaterialAcopioDTO(materialAcopioRepository.save(this.convertToMaterialAcopio(materialAcopio)));	
		}
		return null;
	}


	public MaterialAcopioDTO convertToMaterialAcopioDTO(final MaterialAcopio materialAcopio) {
		return Mhelper.modelMapper().map(materialAcopio, MaterialAcopioDTO.class);
	}

	public MaterialAcopio convertToMaterialAcopio(final MaterialAcopioDTO materialAcopio) {
		return Mhelper.modelMapper().map(materialAcopio, MaterialAcopio.class);
	}


	public List<MaterialxCartoneroDTO> getMaterialsByCartonero(Long idCartonero) {
		List<MaterialxCartoneroDTO> lista = new ArrayList<MaterialxCartoneroDTO>();
		Optional<Cartonero> _cartonero = cartoneroRepository.findById(idCartonero);
		Cartonero cartonero ;
		if(_cartonero.isPresent()) {
			 
			 for ( MaterialAcopio mat: _cartonero.get().getMateriales()) {
				 MaterialxCartoneroDTO  materialAcopiado = new MaterialxCartoneroDTO();
				 materialAcopiado.setIdMaterialAcopio(mat.getIdMaterialAcopio());
				 materialAcopiado.setImg(mat.getMaterial().getImg());
				 materialAcopiado.setNombre(mat.getMaterial().getNombre());
				 materialAcopiado.setPeso(mat.getPeso());
				 materialAcopiado.setPesoAnterior(mat.getPesoAnterior());
				 lista.add(materialAcopiado);
				 
			 }
		}
		return lista;
	}
	
}
