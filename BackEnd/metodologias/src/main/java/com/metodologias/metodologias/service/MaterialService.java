package com.metodologias.metodologias.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.metodologias.metodologias.controller.dto.MaterialDTO;
import com.metodologias.metodologias.persistance.Material;
import com.metodologias.metodologias.persistance.MaterialRepository;
import com.metodologias.metodologias.utils.Mhelper;

@Service
public class MaterialService {

	@Autowired
	MaterialRepository materialRepository;

	public List<MaterialDTO> getMaterials() {
		List<Material> materials = materialRepository.findAll();
		List<MaterialDTO> materialsOut = new ArrayList<MaterialDTO>();
		for (Material material : materials) {
			materialsOut.add(this.convertToMaterialDTO(material));
		}
		return materialsOut;
	}

	public MaterialDTO convertToMaterialDTO(final Material material) {
		return Mhelper.modelMapper().map(material, MaterialDTO.class);
	}

	public Material convertToMaterial(final MaterialDTO material) {
		return Mhelper.modelMapper().map(material, Material.class);
	}

	public MaterialDTO insertMaterial(MaterialDTO material) throws MaterialDuplicated {
		Optional<Material> _material = materialRepository.findByNombre(material.getNombre());
		if (_material.isPresent()) 
			throw new MaterialDuplicated();
		return this.convertToMaterialDTO(materialRepository.save(this.convertToMaterial(material)));
	}

	public MaterialDTO deleteMaterial(Long idMaterial) throws MaterialNotFound {
		Optional<Material> material = materialRepository.findById(idMaterial);
		if(material.isPresent()) {
			materialRepository.deleteById(idMaterial);
			return this.convertToMaterialDTO(material.get());
		}
		throw new MaterialNotFound();
	}

	public MaterialDTO editMaterial(Long idMaterial, MaterialDTO material) throws MaterialNotFound {
		Optional<Material> _material = materialRepository.findById(idMaterial);
		if(_material.isPresent()) {
			material.setIdMaterial(idMaterial);
			return this.convertToMaterialDTO(materialRepository.save(this.convertToMaterial(material)));
		}
		throw new MaterialNotFound();
	}

}
