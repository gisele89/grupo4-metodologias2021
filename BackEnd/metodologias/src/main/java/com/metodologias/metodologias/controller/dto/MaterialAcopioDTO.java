package com.metodologias.metodologias.controller.dto;

public class MaterialAcopioDTO {
	
	private Long idMaterialAcopio;
	private Double peso;
	private Double ultimoPeso;
	
	
	public MaterialAcopioDTO() {
	
	}
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
