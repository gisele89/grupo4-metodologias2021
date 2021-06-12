package com.metodologias.metodologias.persistance;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "material_acopio")
public class MaterialAcopio {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_material_acopio")
	private Long idMaterialAcopio;
	
	@Column(nullable = false)
	private Double peso;
	
	@Column(nullable = false)
	private Double ultimoPeso;
}
