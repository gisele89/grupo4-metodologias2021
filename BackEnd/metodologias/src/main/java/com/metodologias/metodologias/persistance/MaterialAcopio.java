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

	public Long getIdMaterialAcopio() {
		return idMaterialAcopio;
	}

	public void setIdMaterialAcopio(Long idMaterialAcopio) {
		this.idMaterialAcopio = idMaterialAcopio;
	}

	public Double getPeso() {
		return peso;
	}

	public void setPeso(Double peso) {
		this.peso = peso;
	}

	public Double getUltimoPeso() {
		return ultimoPeso;
	}

	public void setUltimoPeso(Double ultimoPeso) {
		this.ultimoPeso = ultimoPeso;
	}
}
